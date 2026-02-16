interface SectionInfo {
  key: string
  title: string
}

class SectionNav extends HTMLElement {
  private sections: SectionInfo[] = []
  private links: Map<string, HTMLAnchorElement> = new Map()
  private anchors: Map<string, HTMLElement> = new Map()
  private intersectingIds: Set<string> = new Set()
  private observer: IntersectionObserver | null = null
  private static HEADER_OFFSET = 82

  connectedCallback() {
    const data = this.getAttribute('data-sections')
    if (data) {
      this.sections = JSON.parse(data)
    }

    this.render()
    this.setupObserver()
    this.setActive('section-intro')
  }

  disconnectedCallback() {
    this.observer?.disconnect()
  }

  private render() {
    this.innerHTML = ''

    const nav = document.createElement('nav')
    nav.setAttribute('aria-label', 'Section navigation')

    // Intro link
    const introLink = this.createLink('section-intro', 'Overview')
    nav.appendChild(introLink)
    this.links.set('section-intro', introLink)

    for (const section of this.sections) {
      const id = `section-${section.key}`
      const link = this.createLink(id, section.title)
      nav.appendChild(link)
      this.links.set(id, link)
    }

    this.appendChild(nav)
  }

  private createLink(id: string, title: string): HTMLAnchorElement {
    const a = document.createElement('a')
    a.href = `#${id}`
    a.textContent = title
    a.className =
      'block px-3 py-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] border-l-2 border-transparent transition-colors truncate'
    a.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.getElementById(id)
      if (target) {
        // Account for sticky header height
        const headerHeight = SectionNav.HEADER_OFFSET
        const y = target.getBoundingClientRect().top + window.scrollY - headerHeight
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    })
    return a
  }

  private setupObserver() {
    // Use IntersectionObserver to highlight current section
    const headerHeight = SectionNav.HEADER_OFFSET
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (entry.isIntersecting) this.intersectingIds.add(id)
          else this.intersectingIds.delete(id)
        }
        this.updateActiveFromViewport(headerHeight)
      },
      {
        rootMargin: `-${headerHeight}px 0px -60% 0px`,
        threshold: 0,
      },
    )

    // Observe all section anchors
    for (const [id] of this.links) {
      const el = document.getElementById(id)
      if (el) {
        this.anchors.set(id, el)
        this.observer.observe(el)
      }
    }
  }

  private updateActiveFromViewport(headerHeight: number) {
    let bestId: string | null = null
    let bestDistance = Number.POSITIVE_INFINITY

    // Prefer currently intersecting anchors and pick the one closest to the header offset.
    for (const id of this.intersectingIds) {
      const anchor = this.anchors.get(id)
      if (!anchor) continue
      const distance = Math.abs(anchor.getBoundingClientRect().top - headerHeight)
      if (distance < bestDistance) {
        bestDistance = distance
        bestId = id
      }
    }

    if (!bestId) {
      // Fallback: choose the last section that has passed the sticky header.
      let fallbackDistance = Number.NEGATIVE_INFINITY
      for (const id of this.links.keys()) {
        const anchor = this.anchors.get(id)
        if (!anchor) continue
        const distance = anchor.getBoundingClientRect().top - headerHeight
        if (distance <= 0 && distance > fallbackDistance) {
          fallbackDistance = distance
          bestId = id
        }
      }
    }

    if (!bestId) {
      // Final fallback when all anchors are below the header (top of page).
      const firstId = this.links.keys().next().value
      if (firstId) bestId = firstId
    }

    if (bestId) this.setActive(bestId)
  }

  private setActive(id: string) {
    for (const [linkId, link] of this.links) {
      if (linkId === id) {
        link.classList.remove(
          'text-[var(--color-text-muted)]',
          'border-transparent',
        )
        link.classList.add(
          'text-[var(--color-text)]',
          'font-medium',
          'border-[var(--color-accent)]',
          'bg-[var(--color-surface)]',
        )
      } else {
        link.classList.add(
          'text-[var(--color-text-muted)]',
          'border-transparent',
        )
        link.classList.remove(
          'text-[var(--color-text)]',
          'font-medium',
          'border-[var(--color-accent)]',
          'bg-[var(--color-surface)]',
        )
      }
    }
  }
}

customElements.define('section-nav', SectionNav)

