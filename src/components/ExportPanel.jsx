import { downloadJson } from '../utils/exportJson'

function ExportPanel({ generatedData, templateId }) {
  const filename = `devdata-${templateId}.json`

  return (
    <section className="export-panel" aria-labelledby="export-title">
      <div>
        <h3 id="export-title">Exportar datos</h3>
        <p>Descarga todos los registros generados en formato JSON.</p>
      </div>
      <button
        className="download-button"
        type="button"
        onClick={() => downloadJson(generatedData, filename)}
      >
        Descargar JSON
      </button>
    </section>
  )
}

export default ExportPanel
