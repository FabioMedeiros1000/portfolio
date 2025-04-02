export async function sendPrompt(
  prompt: string
): Promise<{ response: string }> {
  try {
    const API_URL = 'https://portfolio-backend-gomk.onrender.com'
    const response = await fetch(`${API_URL}/ai/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    })

    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`)
    }

    const data = await response.json()

    return { response: data.response }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Ocorreu um erro na IA')
    }
    throw new Error('Ocorreu um erro na IA')
  }
}
