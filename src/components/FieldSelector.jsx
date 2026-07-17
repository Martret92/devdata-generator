function FieldSelector({ fields, selectedFields, onFieldChange }) {
  return (
    <fieldset className="field-selector">
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
