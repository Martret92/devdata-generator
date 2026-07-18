function formatCellValue(value) {
  if (value === null || value === undefined) {
    return ''
  }

  if (typeof value === 'boolean') {
    return value ? 'Sí' : 'No'
  }

  return String(value)
}

function PreviewTable({ columns, rows }) {
  return (
    <div
      className="preview-table-container"
      role="region"
      aria-label="Tabla de datos generados"
      tabIndex="0"
    >
      <table className="preview-table">
        <caption className="visually-hidden">
          Vista previa completa de los datos generados
        </caption>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} scope="col">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column.id}>
                  {formatCellValue(row[column.id])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PreviewTable
