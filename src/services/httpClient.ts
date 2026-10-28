const API_URL = import.meta.env.VITE_BACKEND_URL
const DEFAULT_TIMEOUT_MS = 15000

export class ApiError extends Error {
  status?: number
  isTimeout: boolean

  constructor(
    message: string,
    options: { status?: number; isTimeout?: boolean } = {}
  ) {
    super(message)
    this.name = 'ApiError'
    this.status = options.status
    this.isTimeout = options.isTimeout ?? false
  }
}

type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: unknown
  timeoutMs?: number
}

export async function request<T>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', body, timeoutMs = DEFAULT_TIMEOUT_MS } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal
    })

    if (!response.ok) {
      throw new ApiError(`Erro: ${response.statusText}`, {
        status: response.status
      })
    }

    return (await response.json()) as T
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      throw error
    }

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError('Tempo limite excedido.', { isTimeout: true })
    }

    if (error instanceof Error) {
      throw new ApiError(error.message)
    }

    throw new ApiError('Erro desconhecido.')
  } finally {
    clearTimeout(timeoutId)
  }
}
