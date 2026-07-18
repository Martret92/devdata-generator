function GenerationResult({ generatedData }) {
  if (generatedData.length === 0) {
    return null
  }

  return (
    <section className="generation-result" aria-labelledby="result-title">
      <h2 id="result-title">
        {generatedData.length} registros generados correctamente.
      </h2>
      <h3>Vista previa del primer registro</h3>
      <pre>{JSON.stringify(generatedData[0], null, 2)}</pre>
    </section>
  )
}

export default GenerationResult
