export type ContactForm = {
  name: string
  email: string
  subject: string
  message: string
}

export type SendStatus = 'success' | 'failure' | 'rateLimit'
