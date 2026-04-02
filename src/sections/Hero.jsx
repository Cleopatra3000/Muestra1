import { getWhatsAppHref } from '../config/siteConfig'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.kicker}>Hola, soy Sienna</p>
        <h1 className={styles.title}>Educacion, aventura y ganas de vivir experiencias distintas</h1>
        <p className={styles.subtitle}>
          Me gusta disfrutar de planes con chispa, descubrir lugares nuevos y compartir buenos momentos
          con personas abiertas a vivir algo diferente.
        </p>
        <p className={styles.subtitle}>
          Si te apetece conocerme mejor, escribeme por WhatsApp y hablamos con calma.
        </p>

        <div className={styles.actions}>
          <a
            className={`${styles.button} ${styles.primary}`}
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribeme por WhatsApp
          </a>

          <a className={`${styles.button} ${styles.secondary}`} href="#editorial">
            Ver galeria
          </a>
        </div>

        <div className={styles.metrics}>
          <article className={styles.metricCard}>
            <span className={styles.metricLabel}>Sobre mi</span>
            <strong className={styles.metricValue}>Espontanea, cercana y con ganas de disfrutar</strong>
          </article>
          <article className={styles.metricCard}>
            <span className={styles.metricLabel}>Planes</span>
            <strong className={styles.metricValue}>Viajes, escapadas y rincones con encanto</strong>
          </article>
          <article className={styles.metricCard}>
            <span className={styles.metricLabel}>Que busco</span>
            <strong className={styles.metricValue}>Personas con curiosidad y buena energia</strong>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero
