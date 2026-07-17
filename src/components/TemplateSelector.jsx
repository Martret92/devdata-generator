function TemplateSelector({ templates, selectedTemplate, onTemplateChange }) {
  return (
    <div className="control">
      <label htmlFor="template">Plantilla</label>
      <select
        id="template"
        value={selectedTemplate}
        onChange={(event) => onTemplateChange(event.target.value)}
      >
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TemplateSelector
