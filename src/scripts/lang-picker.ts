interface LangInfo {
  slug: string;
  name: string;
  category: string;
}

interface CategoryInfo {
  label: string;
  color: string;
}

class LangPicker extends HTMLElement {
  private languages: LangInfo[] = [];
  private categories: Record<string, CategoryInfo> = {};
  private hiddenLangs: Set<string> = new Set();
  private static STORAGE_KEY = 'lang-compare-hidden';

  connectedCallback() {
    const langData = this.getAttribute('data-languages');
    if (langData) {
      this.languages = JSON.parse(langData);
    }

    const catData = this.getAttribute('data-categories');
    if (catData) {
      this.categories = JSON.parse(catData);
    }

    // Restore state from localStorage
    const stored = localStorage.getItem(LangPicker.STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.hiddenLangs = new Set(parsed);
        }
      } catch {
        // ignore invalid stored data
      }
    }

    this.normalizeHiddenLangs();
    this.render();
    this.applyVisibility();
  }

  private render() {
    const container = this.querySelector('div');
    if (!container) return;

    container.innerHTML = '';

    // Group languages by category
    const grouped = new Map<string, LangInfo[]>();
    for (const lang of this.languages) {
      const cat = lang.category;
      if (!grouped.has(cat)) grouped.set(cat, []);
      grouped.get(cat)!.push(lang);
    }

    for (const [catKey, langs] of grouped) {
      const catInfo = this.categories[catKey];

      // Category group wrapper
      const group = document.createElement('div');
      group.className = 'flex items-center gap-1';

      // Category indicator dot + label
      const catLabel = document.createElement('span');
      catLabel.className = 'flex items-center gap-1 text-xs text-[var(--color-text-muted)] mr-1 whitespace-nowrap';
      const dot = document.createElement('span');
      dot.className = 'inline-block w-2 h-2 shrink-0';
      dot.style.backgroundColor = catInfo?.color ?? '#888';
      catLabel.appendChild(dot);
      const catText = document.createElement('span');
      catText.textContent = catInfo?.label ?? catKey;
      catLabel.appendChild(catText);
      group.appendChild(catLabel);

      for (const lang of langs) {
        const label = document.createElement('label');
        label.className =
          'flex items-center gap-1.5 text-sm cursor-pointer select-none px-2 py-1 border border-[var(--color-border)] hover:bg-[var(--color-surface-alt)] transition-colors';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = !this.hiddenLangs.has(lang.slug);
        checkbox.className = 'accent-[var(--color-accent)]';
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            this.hiddenLangs.delete(lang.slug);
          } else {
            // Keep at least one language visible at all times.
            if (this.getVisibleCount() <= 1) {
              checkbox.checked = true;
              return;
            }
            this.hiddenLangs.add(lang.slug);
          }
          this.save();
          this.applyVisibility();
        });

        const span = document.createElement('span');
        span.textContent = lang.name;

        label.appendChild(checkbox);
        label.appendChild(span);
        group.appendChild(label);
      }

      // Separator between groups
      const separator = document.createElement('span');
      separator.className = 'w-px h-5 bg-[var(--color-border)] mx-1';
      container.appendChild(group);
      container.appendChild(separator);
    }

    // Remove trailing separator
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }

  private applyVisibility() {
    this.normalizeHiddenLangs();

    // Hide/show all cells for each language
    for (const lang of this.languages) {
      const cells = document.querySelectorAll(`[data-lang="${lang.slug}"]`) as NodeListOf<HTMLElement>;
      const isHidden = this.hiddenLangs.has(lang.slug);
      cells.forEach((cell) => {
        cell.style.display = isHidden ? 'none' : '';
      });
    }

    // Update grid-template-columns on the grid container
    const grid = document.querySelector('.comparison-grid') as HTMLElement | null;
    if (grid) {
      const visibleCount = this.getVisibleCount();
      grid.style.gridTemplateColumns = `repeat(${visibleCount}, minmax(350px, 1fr))`;
    }
  }

  private save() {
    localStorage.setItem(LangPicker.STORAGE_KEY, JSON.stringify([...this.hiddenLangs]));
  }

  private getVisibleCount(): number {
    return this.languages.filter((l) => !this.hiddenLangs.has(l.slug)).length;
  }

  private normalizeHiddenLangs() {
    const validSlugs = new Set(this.languages.map((l) => l.slug));
    this.hiddenLangs = new Set(
      [...this.hiddenLangs].filter((slug) => validSlugs.has(slug)),
    );

    // Guarantee at least one visible language for a usable grid.
    if (this.languages.length > 0 && this.getVisibleCount() === 0) {
      this.hiddenLangs.delete(this.languages[0].slug);
    }
  }
}

customElements.define('lang-picker', LangPicker);
