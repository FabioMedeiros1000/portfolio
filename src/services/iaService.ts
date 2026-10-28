import { request } from './httpClient'

// O backend roda no Render e pode levar até ~1 min para acordar
const IA_TIMEOUT_MS = 90000

export async function sendPrompt(
  prompt: string
): Promise<{ response: string }> {
  const data = await request<{ response: string }>('/ai/ask', {
    method: 'POST',
    body: { prompt },
    timeoutMs: IA_TIMEOUT_MS
  })

  return { response: data.response }
}
