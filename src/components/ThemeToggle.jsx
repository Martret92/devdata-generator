function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-pressed={isDark}
      onClick={onToggle}
    >
      {isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
    </button>
  )
}

export default ThemeToggle
