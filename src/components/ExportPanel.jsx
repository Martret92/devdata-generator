import { downloadCsv } from '../utils/exportCsv'
import { downloadJson } from '../utils/exportJson'
import { downloadSql } from '../utils/exportSql'

function ExportPanel({ generatedData, columns, templateId }) {
  const jsonFilename = `devdata-${templateId}.json`
  const csvFilename = `devdata-${templateId}.csv`
  const sqlFilename = `devdata-${templateId}.sql`

  return (
    <section className="export-panel" aria-labelledby="export-title">
      <div>
        <h3 id="export-title">Exportar datos</h3>
        <p>
          Descarga todos los registros generados en el formato que necesites.
        </p>
      </div>
      <div className="export-actions">
        <button
          className="download-button"
          type="button"
          onClick={() => downloadJson(generatedData, jsonFilename)}
        >
          Descargar JSON
        </button>
        <button
          className="download-button"
          type="button"
          onClick={() => downloadCsv(generatedData, columns, csvFilename)}
        >
          Descargar CSV
        </button>
        <button
          className="download-button"
          type="button"
          onClick={() =>
            downloadSql(generatedData, columns, templateId, sqlFilename)
          }
        >
          Descargar SQL
        </button>
      </div>
    </section>
  )
}

export default ExportPanel
