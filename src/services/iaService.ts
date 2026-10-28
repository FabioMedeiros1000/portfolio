import { request } from './httpClient'

export async function sendPrompt(
  prompt: string
): Promise<{ response: string }> {
  const data = await request<{ response: string }>('/ai/ask', {
    method: 'POST',
    body: { prompt },
    timeoutMs: 30000
  })

  return { response: data.response }
}
