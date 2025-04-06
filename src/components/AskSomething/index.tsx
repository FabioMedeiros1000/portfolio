import { FormProvider, useForm } from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'

import Section from '../Section'
import Button from '../Button'
import MessageBox from '../MessageBox'

import { sendPrompt } from '../../services/iaService'

import { GlobalContainer, TitleGlobal } from '../../styles'
import { colors } from '../../variables'
import Loader from '../Loader'
import { MessageContainer } from './styles'
import { useTranslation } from 'react-i18next'
import Input from '../Input'

type UserInputType = {
  prompt: string
}

type IaAnswerType = {
  response: string
}

type ChatWithIA = UserInputType & IaAnswerType

const AskSomething = () => {
  const methods = useForm<UserInputType>()
  const {
    handleSubmit,
    formState: { errors }
  } = methods

  const [chat, setChat] = useState<ChatWithIA[]>([])
  const [loading, setLoading] = useState(false)

  const lastMessageRef = useRef<HTMLDivElement | null>(null)
  const { t } = useTranslation()

  const onSubmit = async (data: UserInputType) => {
    try {
      setLoading(true)
      const result = await sendPrompt(data.prompt)
      setChat((previousData) => [
        ...previousData,
        { prompt: data.prompt, response: result.response }
      ])
      methods.reset()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chat])

  return (
    <Section backgroundColor="red" id="askMe">
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="textarea"
              fieldName="prompt"
              validationMessage={t('validationMessage.required')}
              borderColor={colors.white}
              minLength={5}
              maxLength={530}
              error={errors.prompt?.message as string}
              placeholder={t('askMe.placeholder')}
            />
            <Button
              bgColor="white"
              type="submit"
              title={t('askMe.buttonTitle')}
            >
              {loading ? <Loader color={colors.red} /> : t('askMe.button')}
            </Button>
          </form>
        </FormProvider>
      </GlobalContainer>
    </Section>
  )
}

export default AskSomething
