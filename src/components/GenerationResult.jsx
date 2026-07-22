import { useState } from 'react'
import ExportPanel from './ExportPanel'
import JsonPreview from './JsonPreview'
import PreviewTable from './PreviewTable'

function GenerationResult({ generatedData, columns, templateId }) {
  const [activeView, setActiveView] = useState('table')

  if (generatedData.length === 0) {
    return null
  }

  return (
    <section className="generation-result" aria-labelledby="result-title">
      <h2 id="result-title">
        {generatedData.length} registros generados correctamente.
      </h2>
      <div className="view-selector" aria-label="Seleccionar vista">
        <button
          type="button"
          aria-pressed={activeView === 'table'}
          onClick={() => setActiveView('table')}
        >
          Tabla
        </button>
        <button
          type="button"
          aria-pressed={activeView === 'json'}
          onClick={() => setActiveView('json')}
        >
          JSON
        </button>
      </div>
      {activeView === 'table' ? (
        <PreviewTable columns={columns} rows={generatedData} />
      ) : (
        <JsonPreview generatedData={generatedData} />
      )}
      <ExportPanel
        generatedData={generatedData}
        columns={columns}
        templateId={templateId}
      />
    </section>
  )
}

export default GenerationResult
