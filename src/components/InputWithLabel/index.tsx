import { FormInputWithLabelProps } from '../../hooks/useFormHook'
import Input from '../Input'

import { Wrapper } from './styles'

const InputWithLabel = ({ label, id, ...rest }: FormInputWithLabelProps) => (
  <Wrapper>
    <label htmlFor={id}>{label}</label>
    <Input id={id} {...rest} />
  </Wrapper>
)

export default InputWithLabel
