import { ContactForm } from '../types/contact'
import { ApiError, request } from './httpClient'

export async function sendEmail(
  form: ContactForm
): Promise<{ message: string }> {
  try {
    return await request<{ message: string }>('/api/email', {
      method: 'POST',
      body: form
    })
  } catch (error: unknown) {
    if (error instanceof ApiError && error.isTimeout) {
      throw new ApiError('Tempo limite excedido ao enviar o e-mail.', {
        isTimeout: true
      })
    }

    throw error
  }
}
