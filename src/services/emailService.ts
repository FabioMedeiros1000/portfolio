import { FormType } from '../components/Contact'

export async function sendEmail(
  formData: FormType
): Promise<{ message: string }> {
  try {
    const response = await fetch('http://localhost:5000/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error(`Erro: ${response.statusText}`)
    }

    const data = await response.json()
    return data
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Erro ao enviar e-mail!')
    }
    throw new Error('Erro desconhecido ao enviar e-mail!')
  }
}
