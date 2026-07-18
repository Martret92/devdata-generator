function ValidationMessage({ errors }) {
  if (errors.length === 0) {
    return null
  }

  return (
    <div id="validation-errors" className="validation-message" role="alert">
      {errors.length === 1 ? (
        <p>{errors[0]}</p>
      ) : (
        <>
          <p>Revisa los siguientes campos:</p>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default ValidationMessage
