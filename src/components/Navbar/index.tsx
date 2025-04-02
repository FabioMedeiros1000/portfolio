import { useTranslation } from 'react-i18next'
import { NavbarContainer } from './styles'

const Navbar = () => {
  const { t } = useTranslation()

  return (
    <NavbarContainer>
      <ul>
        <li>
          <a href="#about" title={t('header.titleLabel.about')}>
            {t('header.about')}
          </a>
        </li>
        <li>
          <a href="#skills" title={t('header.titleLabel.skills')}>
            {t('header.skills')}
          </a>
        </li>
        <li>
          <a href="#projects" title={t('header.titleLabel.projects')}>
            {t('header.projects')}
          </a>
        </li>
        <li>
          <a href="#resume" title={t('header.titleLabel.resume')}>
            {t('header.resume')}
          </a>
        </li>
        <li>
          <a href="#contact" title={t('header.titleLabel.contact')}>
            {t('header.contact')}
          </a>
        </li>
        <li>
          <a href="#askMe" title={t('header.titleLabel.askMe')}>
            {t('header.askMe')}
          </a>
        </li>
      </ul>
    </NavbarContainer>
  )
}

export default Navbar
