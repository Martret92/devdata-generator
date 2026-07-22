import { downloadFile } from './downloadFile'

const CSV_DELIMITER = ';'
const CSV_ROW_SEPARATOR = '\r\n'
const UTF8_BOM = '\uFEFF'

function escapeCsvValue(value) {
  if (value === null || value === undefined) {
    return '""'
  }

  const text = String(value).replaceAll('"', '""')
  return `"${text}"`
}

export function serializeCsv(data, columns) {
  const header = columns.map((column) => escapeCsvValue(column.id))
  const rows = data.map((row) =>
    columns.map((column) => escapeCsvValue(row[column.id])),
  )

  return [header, ...rows]
    .map((row) => row.join(CSV_DELIMITER))
    .join(CSV_ROW_SEPARATOR)
}

export function downloadCsv(data, columns, filename) {
  const content = UTF8_BOM + serializeCsv(data, columns)
  downloadFile(content, filename, 'text/csv;charset=utf-8')
}
