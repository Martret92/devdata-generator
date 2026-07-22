import { downloadFile } from './downloadFile'

export function serializeJson(data) {
  return JSON.stringify(data, null, 2)
}

export function downloadJson(data, filename) {
  const content = serializeJson(data)
  downloadFile(content, filename, 'application/json;charset=utf-8')
}
