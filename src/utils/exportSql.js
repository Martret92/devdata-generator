import { downloadFile } from './downloadFile'

const SQL_ROW_SEPARATOR = '\r\n'

function formatSqlValue(value) {
  if (value === null || value === undefined) {
    return 'NULL'
  }

  if (typeof value === 'number') {
    return Number.isFinite(value) ? String(value) : 'NULL'
  }

  if (typeof value === 'boolean') {
    return value ? 'TRUE' : 'FALSE'
  }

  const text = String(value).replaceAll("'", "''")
  return `'${text}'`
}

export function serializeSql(data, columns, tableName) {
  const columnNames = columns.map((column) => column.id).join(', ')

  return data
    .map((row) => {
      const values = columns
        .map((column) => formatSqlValue(row[column.id]))
        .join(', ')

      return `INSERT INTO ${tableName} (${columnNames}) VALUES (${values});`
    })
    .join(SQL_ROW_SEPARATOR)
}

export function downloadSql(data, columns, tableName, filename) {
  const content = serializeSql(data, columns, tableName)
  downloadFile(content, filename, 'application/sql;charset=utf-8')
}
