import { useState } from 'react'
import { downloadCsv } from '../utils/exportCsv'
import { copyJson } from '../utils/copyJson'
import { downloadJson } from '../utils/exportJson'
import { downloadSql } from '../utils/exportSql'

function ExportPanel({ generatedData, columns, templateId }) {
  const [copyStatus, setCopyStatus] = useState('idle')
  const jsonFilename = `devdata-${templateId}.json`
  const csvFilename = `devdata-${templateId}.csv`
  const sqlFilename = `devdata-${templateId}.sql`

  const handleCopyJson = async () => {
    setCopyStatus('idle')

    try {
      await copyJson(generatedData)
      setCopyStatus('success')
    } catch {
      setCopyStatus('error')
    }
  }

  return (
    <section className="export-panel" aria-labelledby="export-title">
      <div>
        <h3 id="export-title">Exportar datos</h3>
        <p>
          Copia o descarga todos los registros generados en el formato que
          necesites.
        </p>
      </div>
      <div className="export-actions">
        <button
          className="download-button"
          type="button"
          onClick={handleCopyJson}
        >
          Copiar JSON
        </button>
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
      {copyStatus !== 'idle' && (
        <p
          className={`copy-feedback copy-feedback--${copyStatus}`}
          role={copyStatus === 'success' ? 'status' : 'alert'}
          aria-live={copyStatus === 'success' ? 'polite' : undefined}
        >
          {copyStatus === 'success'
            ? 'JSON copiado al portapapeles.'
            : 'No se pudo copiar el JSON. Inténtalo de nuevo.'}
        </p>
      )}
    </section>
  )
}

export default ExportPanel
