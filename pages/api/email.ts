import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

interface RequestBody {
  name: string
  email: string
  message: string
  subject: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    // Método não permitido
    return res
      .status(405)
      .json({ success: false, error: 'Método não permitido' })
  }

  const { name, email, message, subject }: RequestBody = req.body

  if (!name || !email || !message || !subject) {
    return res
      .status(400)
      .json({ success: false, error: 'Todos os campos são obrigatórios.' })
  }

  const messageFinal = `
  ${message}

  Email do remetente: ${email}
  Nome do remetente: ${name}

  Essa mensagem veio através da sua página web!
  `

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD
    }
  })

  try {
    await transporter.sendMail({
      from: `"${name} (via Meu Site)" <${process.env.USER_EMAIL}>`,
      to: process.env.USER_EMAIL,
      subject,
      text: messageFinal
    })

    res
      .status(200)
      .json({ success: true, message: 'Email enviado com sucesso!' })
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Erro ao enviar o email:', error.message, error.stack)
    } else {
      console.error('Erro desconhecido', error)
    }

    res.status(500).json({
      success: false,
      error: 'Erro ao enviar o email. Tente novamente mais tarde.'
    })
  }
}
