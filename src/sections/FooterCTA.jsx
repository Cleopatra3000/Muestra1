import { getWhatsAppHref } from '../config/siteConfig'
import styles from './FooterCTA.module.css'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Si te gustan los planes con aventura, escribeme</h2>
      <p className={styles.subtitle}>
        Estoy en Madrid y me encanta descubrir lugares nuevos. Si te apetece conocerme mejor,
        escribeme por WhatsApp.
      </p>

      <a className={styles.cta} href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">
        Escribeme por WhatsApp
      </a>
    </section>
  )
}

export default FooterCTA
