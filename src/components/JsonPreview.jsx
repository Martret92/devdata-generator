function JsonPreview({ generatedData }) {
  return (
    <div
      className="json-preview"
      role="region"
      aria-label="Vista JSON de los datos generados"
      tabIndex="0"
    >
      <pre>{JSON.stringify(generatedData, null, 2)}</pre>
    </div>
  )
}

export default JsonPreview
