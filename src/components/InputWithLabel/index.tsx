import { FormInputWithLabelProps } from '../../hooks/useFormHook'
import Input from '../Input'

const InputWithLabel = ({ label, id, ...rest }: FormInputWithLabelProps) => (
  <div style={{ display: 'block', width: '100%' }}>
    <label htmlFor={id} style={{ fontWeight: 'bold' }}>
      {label}
    </label>
    <Input id={id} {...rest} />
  </div>
)

export default InputWithLabel
