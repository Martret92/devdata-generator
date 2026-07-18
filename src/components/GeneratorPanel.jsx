function GeneratorPanel({ children, onSubmit }) {
  return (
    <form
      className="generator-panel"
      aria-labelledby="generator-title"
      noValidate
      onSubmit={onSubmit}
    >
      <h2 id="generator-title">Configuración</h2>
      {children}
    </form>
  )
}

export default GeneratorPanel
