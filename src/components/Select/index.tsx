import { SelectContainer } from './styles'

type SelectProps = {
  selectedLanguage: string
  handleLanguageChange: (language: string) => void
}

const Select = ({ selectedLanguage, handleLanguageChange }: SelectProps) => (
  <SelectContainer
    value={selectedLanguage}
    onChange={(event) => handleLanguageChange(event.target.value)}
  >
    <option value="pt">PT</option>
    <option value="en">EN</option>
  </SelectContainer>
)

export default Select
