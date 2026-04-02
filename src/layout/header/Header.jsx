import { useState } from 'react'
import heroMain from '../../images/editorial/hero-main.jpg'
import styles from './header.module.css'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded((current) => !current)
  }

  return (
    <header data-site-header className={styles.header}>
      <div className={`${styles.imageHero} ${isExpanded ? styles.imageHeroExpanded : ''}`}>
        <button
          type="button"
          className={styles.imageButton}
          onClick={toggleExpanded}
          aria-label={isExpanded ? 'Reducir imagen principal' : 'Ampliar imagen principal'}
          aria-pressed={isExpanded}
        >
          <img
            className={`${styles.image} ${isExpanded ? styles.imageExpanded : ''}`}
            src={heroMain}
            alt="Imagen principal de la cabecera"
            loading="eager"
          />
        </button>
      </div>
    </header>
  )
}

export default Header
