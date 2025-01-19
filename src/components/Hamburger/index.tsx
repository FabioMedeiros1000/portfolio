import { useTranslation } from 'react-i18next'
import { Fade } from 'hamburger-react'
import { useEffect, useState } from 'react'

import { ContainerIcon, HamburgerContent } from './styles'
import { breakpoints } from '../../variables'

const Hamburger = () => {
  const [isOpen, setOpen] = useState(false)
  const { t } = useTranslation()

  const handleItemClick = () => {
    setOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= parseInt(breakpoints.tablet, 10)
      if (!isMobile) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <ContainerIcon>
        <Fade
          toggled={isOpen}
          toggle={setOpen}
          direction="right"
          size={40}
          duration={0.5}
        />
      </ContainerIcon>
      <HamburgerContent className={isOpen ? 'is-open' : ''}>
        <li onClick={handleItemClick}>
          <a href="#about" title={t('header.titleLabel.about')}>
            {t('header.about')}
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a href="#skills" title={t('header.titleLabel.skills')}>
            {t('header.skills')}
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a href="#projects" title={t('header.titleLabel.projects')}>
            {t('header.projects')}
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a href="#resume" title={t('header.titleLabel.resume')}>
            {t('header.resume')}
          </a>
        </li>
        <li onClick={handleItemClick}>
          <a href="#contact" title={t('header.titleLabel.contact')}>
            {t('header.contact')}
          </a>
        </li>
      </HamburgerContent>
    </>
  )
}

export default Hamburger
