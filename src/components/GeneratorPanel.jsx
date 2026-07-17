function GeneratorPanel({ children }) {
  return (
    <section className="generator-panel" aria-labelledby="generator-title">
      <h2 id="generator-title">Configuración</h2>
      {children}
    </section>
  )
}

export default GeneratorPanel
