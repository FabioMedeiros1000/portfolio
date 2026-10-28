import { FormProvider, useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'

import Section from '../Section'
import Button from '../Button'
import MessageBox from '../MessageBox'

import { sendPrompt } from '../../services/iaService'
import { ApiError } from '../../services/httpClient'

import { GlobalContainer, TitleGlobal } from '../../styles'
import {
  Kbd,
  MessageContainer,
  Palette,
  PaletteFoot,
  PaletteSearch,
  Status
} from './styles'
import { useTranslation } from 'react-i18next'
import Input from '../Input'

type UserInputType = {
  prompt: string
}

type IaAnswerType = {
  response: string
}

type ChatWithIA = UserInputType & IaAnswerType

type IaError = 'timeout' | 'generic'

const SLOW_WARNING_MS = 8000

const AskSomething = () => {
  const methods = useForm<UserInputType>()
  const {
    handleSubmit,
    formState: { errors }
  } = methods

  const [chat, setChat] = useState<ChatWithIA[]>([])
  const [loading, setLoading] = useState(false)
  const [slow, setSlow] = useState(false)
  const [error, setError] = useState<IaError | null>(null)

  const lastMessageRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation()

  const onSubmit = async (data: UserInputType) => {
    try {
      setError(null)
      setLoading(true)
      const result = await sendPrompt(data.prompt)
      setChat((previousData) => [
        ...previousData,
        { prompt: data.prompt, response: result.response }
      ])
      methods.reset()
    } catch (err: unknown) {
      setError(err instanceof ApiError && err.isTimeout ? 'timeout' : 'generic')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (!loading) handleSubmit(onSubmit)()
    }
  }

  useEffect(() => {
    if (!loading) {
      setSlow(false)
      return
    }

    const timeoutId = setTimeout(() => setSlow(true), SLOW_WARNING_MS)
    return () => clearTimeout(timeoutId)
  }, [loading])

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chat])

  return (
    <Section id="askMe">
      <GlobalContainer>
        <TitleGlobal>{t('askMe.title')}</TitleGlobal>
        <MessageContainer>
          {chat.map((item, index) => (
            <div
              key={`chat-${index}`}
              ref={index === chat.length - 1 ? lastMessageRef : null}
            >
              <MessageBox key={`prompt-${index}`} iaReply={false}>
                <b>{item.prompt}</b>
              </MessageBox>
              <MessageBox key={`response-${index}`} iaReply={true}>
                {item.response}
              </MessageBox>
            </div>
          ))}
        </MessageContainer>
        <FormProvider {...methods}>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Palette>
              <PaletteSearch>
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <Input
                  type="textarea"
                  fieldName="prompt"
                  validationMessage={t('validationMessage.required')}
                  minLength={5}
                  maxLength={530}
                  error={errors.prompt?.message as string}
                  placeholder={t('askMe.placeholder')}
                  onKeyDown={handleKeyDown}
                />
              </PaletteSearch>
              <PaletteFoot>
                <small>{t('askMe.assistantLabel')}</small>
                <Button
                  variant="accent"
                  type="submit"
                  title={t('askMe.buttonTitle')}
                  loading={loading}
                >
                  {t('askMe.button')}
                  <Kbd aria-hidden="true">↵</Kbd>
                </Button>
              </PaletteFoot>
            </Palette>
            {loading && slow && (
              <Status role="status">{t('askMe.slow')}</Status>
            )}
            {error && (
              <Status role="alert" $error>
                {t(`askMe.error.${error}`)}
              </Status>
            )}
          </form>
        </FormProvider>
      </GlobalContainer>
    </Section>
  )
}

export default AskSomething
