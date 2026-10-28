import { ContactForm } from '../types/contact'
import { ApiError, request } from './httpClient'

// O backend roda no Render e pode levar até ~1 min para acordar
const EMAIL_TIMEOUT_MS = 90000

export async function sendEmail(
  form: ContactForm
): Promise<{ message: string }> {
  try {
    return await request<{ message: string }>('/api/email', {
      method: 'POST',
      body: form,
      timeoutMs: EMAIL_TIMEOUT_MS
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
