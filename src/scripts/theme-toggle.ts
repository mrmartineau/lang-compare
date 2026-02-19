class ThemeToggle extends HTMLElement {
  private static STORAGE_KEY = 'theme';

  connectedCallback() {
    const button = this.querySelector('button');
    if (!button) return;

    this.updateIcons();

    button.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem(ThemeToggle.STORAGE_KEY, isDark ? 'dark' : 'light');
      this.updateIcons();
    });
  }

  private updateIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    const lightIcon = this.querySelector('.icon-light') as HTMLElement | null;
    const darkIcon = this.querySelector('.icon-dark') as HTMLElement | null;

    if (lightIcon) lightIcon.classList.toggle('hidden', isDark);
    if (darkIcon) darkIcon.classList.toggle('hidden', !isDark);
  }
}

customElements.define('theme-toggle', ThemeToggle);

