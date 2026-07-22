import { serializeJson } from '../utils/exportJson'

function JsonPreview({ generatedData }) {
  return (
    <div
      className="json-preview"
      role="region"
      aria-label="Vista JSON de los datos generados"
      tabIndex="0"
    >
      <pre>{serializeJson(generatedData)}</pre>
    </div>
  )
}

export default JsonPreview
