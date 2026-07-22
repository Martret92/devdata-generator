export function serializeJson(data) {
  return JSON.stringify(data, null, 2)
}

export function downloadJson(data, filename) {
  const content = serializeJson(data)
  const blob = new Blob([content], {
    type: 'application/json;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  link.remove()

  setTimeout(() => URL.revokeObjectURL(url), 0)
}
