export function getCssHeaderHeight(): number {
  if (typeof window === 'undefined') return 0

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue('--header-height')
    .trim()
  const parsed = Number.parseFloat(raw)
  return Number.isFinite(parsed) ? parsed : 0
}

function isPinnedAtTop(element: HTMLElement, containerTop: number): boolean {
  const rect = element.getBoundingClientRect()
  return rect.bottom > containerTop && rect.top <= containerTop + 1
}

function canOccludeContent(element: HTMLElement): boolean {
  const style = window.getComputedStyle(element)
  return style.position === 'sticky' || style.position === 'fixed'
}

export function getPinnedContentTopInset(scrollContainer: HTMLElement): number {
  const containerRect = scrollContainer.getBoundingClientRect()
  let pinnedBottom = containerRect.top

  const candidates = scrollContainer.querySelectorAll<HTMLElement>(
    '.lang-headers, .lang-header, [data-sticky-header]',
  )

  candidates.forEach((candidate) => {
    if (!canOccludeContent(candidate)) return
    if (!isPinnedAtTop(candidate, containerRect.top)) return
    const rect = candidate.getBoundingClientRect()
    pinnedBottom = Math.max(pinnedBottom, rect.bottom)
  })

  return Math.max(0, pinnedBottom - containerRect.top)
}

export function getActiveLineTop(scrollContainer: HTMLElement): number {
  const containerTop = scrollContainer.getBoundingClientRect().top
  const topInset = getPinnedContentTopInset(scrollContainer)
  return containerTop + topInset
}

export interface VisibleContentWindow {
  scrollHeight: number
  clientHeight: number
  topInset: number
  visibleTop: number
  visibleHeight: number
}

export function getVisibleContentWindow(
  scrollContainer: HTMLElement,
): VisibleContentWindow {
  const scrollHeight = scrollContainer.scrollHeight
  const clientHeight = scrollContainer.clientHeight
  const topInset = getPinnedContentTopInset(scrollContainer)
  const visibleHeight = Math.max(clientHeight - topInset, 0)
  const maxTop = Math.max(scrollHeight - visibleHeight, 0)
  const rawTop = scrollContainer.scrollTop + topInset
  const visibleTop = Math.min(Math.max(rawTop, 0), maxTop)

  return {
    scrollHeight,
    clientHeight,
    topInset,
    visibleTop,
    visibleHeight,
  }
}

interface ActiveSectionTrackerOptions {
  scrollContainer: HTMLElement
  anchorIds: string[]
  onActiveChange: (activeId: string) => void
  initialActiveId?: string
}

export interface ActiveSectionTracker {
  refresh: () => void
  disconnect: () => void
}

export function createActiveSectionTracker(
  options: ActiveSectionTrackerOptions,
): ActiveSectionTracker {
  const { scrollContainer, anchorIds, onActiveChange, initialActiveId } = options
  const anchorMap = new Map<string, HTMLElement>()
  const intersectingIds = new Set<string>()
  const orderedIds = anchorIds.filter((id, index) => anchorIds.indexOf(id) === index)

  orderedIds.forEach((id) => {
    const anchor = document.getElementById(id)
    if (anchor) anchorMap.set(id, anchor)
  })

  let currentActiveId = initialActiveId ?? null
  let observer: IntersectionObserver | null = null

  const setActive = (id: string) => {
    if (id === currentActiveId) return
    currentActiveId = id
    onActiveChange(id)
  }

  const updateActiveFromViewport = () => {
    if (!anchorMap.size) return
    const activeLineTop = getActiveLineTop(scrollContainer)
    let bestId: string | null = null
    let bestDistance = Number.POSITIVE_INFINITY

    for (const id of intersectingIds) {
      const anchor = anchorMap.get(id)
      if (!anchor) continue
      const distance = Math.abs(anchor.getBoundingClientRect().top - activeLineTop)
      if (distance < bestDistance) {
        bestDistance = distance
        bestId = id
      }
    }

    if (!bestId) {
      let fallbackDistance = Number.NEGATIVE_INFINITY
      for (const id of orderedIds) {
        const anchor = anchorMap.get(id)
        if (!anchor) continue
        const distance = anchor.getBoundingClientRect().top - activeLineTop
        if (distance <= 0 && distance > fallbackDistance) {
          fallbackDistance = distance
          bestId = id
        }
      }
    }

    if (!bestId) {
      bestId = orderedIds.find((id) => anchorMap.has(id)) ?? null
    }

    if (bestId) setActive(bestId)
  }

  const buildObserver = () => {
    observer?.disconnect()
    intersectingIds.clear()

    const topInset = getPinnedContentTopInset(scrollContainer)
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (!id) continue
          if (entry.isIntersecting) intersectingIds.add(id)
          else intersectingIds.delete(id)
        }
        updateActiveFromViewport()
      },
      {
        root: scrollContainer,
        rootMargin: `-${topInset}px 0px -60% 0px`,
        threshold: 0,
      },
    )

    for (const anchor of anchorMap.values()) {
      observer.observe(anchor)
    }
  }

  const onScroll = () => updateActiveFromViewport()
  const onResize = () => {
    buildObserver()
    updateActiveFromViewport()
  }

  scrollContainer.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })

  buildObserver()
  if (initialActiveId) onActiveChange(initialActiveId)
  updateActiveFromViewport()

  return {
    refresh: () => {
      buildObserver()
      updateActiveFromViewport()
    },
    disconnect: () => {
      scrollContainer.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      observer?.disconnect()
    },
  }
}
