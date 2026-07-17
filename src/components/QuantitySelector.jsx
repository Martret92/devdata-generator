function QuantitySelector({ numberRecords, onNumberRecordsChange }) {
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
        max="1000"
        value={numberRecords}
        onChange={handleChange}
      />
    </div>
  )
}

export default QuantitySelector
