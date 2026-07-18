import PreviewTable from './PreviewTable'

function GenerationResult({ generatedData, columns }) {
  if (generatedData.length === 0) {
    return null
  }

  return (
    <section className="generation-result" aria-labelledby="result-title">
      <h2 id="result-title">
        {generatedData.length} registros generados correctamente.
      </h2>
      <PreviewTable columns={columns} rows={generatedData} />
    </section>
  )
}

export default GenerationResult
