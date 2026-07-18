function FieldSelector({ fields, selectedFields, onFieldChange, hasError }) {
  return (
    <fieldset
      className="field-selector"
      aria-invalid={hasError}
      aria-describedby={hasError ? 'validation-errors' : undefined}
    >
      <legend>Campos incluidos</legend>
      <div className="field-grid">
        {fields.map((field) => {
          const checkboxId = `field-${field.id}`

          return (
            <div className="checkbox-control" key={field.id}>
              <input
                id={checkboxId}
                type="checkbox"
                checked={selectedFields.includes(field.id)}
                onChange={() => onFieldChange(field.id)}
              />
              <label htmlFor={checkboxId}>{field.label}</label>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}

export default FieldSelector
