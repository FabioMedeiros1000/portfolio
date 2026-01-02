import { FormType } from '../components/Contact'

export async function sendEmail(
  formData: FormType
): Promise<{ message: string }> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 15000)

  try {
    const API_URL = import.meta.env.VITE_BACKEND_URL

    const response = await fetch(`${API_URL}/api/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
      signal: controller.signal
    })

    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`)
    }

    return await response.json()
  } catch (error: unknown) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error('Tempo limite excedido ao enviar o e-mail.')
    }

    if (error instanceof Error) {
      throw new Error(error.message || 'Erro ao enviar e-mail!')
    }

    throw new Error('Erro desconhecido ao enviar e-mail!')
  } finally {
    clearTimeout(timeoutId)
  }
}
