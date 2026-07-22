import ThemeToggle from './ThemeToggle'

function Header({ theme, onToggleTheme }) {
  return (
    <header className="header">
      <div className="header-copy">
        <h1>DevData Generator</h1>
        <p>Configura una plantilla y los campos de tus datos ficticios.</p>
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </header>
  )
}

export default Header
