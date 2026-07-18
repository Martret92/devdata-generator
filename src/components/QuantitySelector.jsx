function QuantitySelector({
  numberRecords,
  onNumberRecordsChange,
  hasError,
}) {
  const handleChange = (event) => {
    const value = event.target.value
    onNumberRecordsChange(value === '' ? '' : Number(value))
  }

  return (
    <div className="control">
      <label htmlFor="quantity">Cantidad de registros</label>
      <input
        id="quantity"
        type="number"
        min="1"
        max="100"
        step="1"
        value={numberRecords}
        aria-invalid={hasError}
        aria-describedby={hasError ? 'validation-errors' : undefined}
        onChange={handleChange}
      />
    </div>
  )
}

export default QuantitySelector
