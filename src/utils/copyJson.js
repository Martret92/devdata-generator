import { serializeJson } from './exportJson'

export async function copyJson(data) {
  if (!navigator.clipboard?.writeText) {
    throw new Error('Clipboard API is not available')
  }

  const content = serializeJson(data)
  await navigator.clipboard.writeText(content)
}
