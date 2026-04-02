import { Link } from 'react-router-dom'
import styles from './AgeGate.module.css'

const AgeGate = ({ onAccept, onReject, status }) => {
  const isDenied = status === 'denied'

  return (
    <div className={styles.backdrop}>
      <section
        className={styles.card}
        aria-labelledby="age-gate-title"
        aria-modal="true"
        role="dialog"
      >
        <p className={styles.eyebrow}>Acceso restringido</p>
        <h1 id="age-gate-title" className={styles.title}>
          Esta web es solo para personas adultas
        </h1>

        {isDenied ? (
          <>
            <p className={styles.text}>
              Has indicado que eres menor de edad, asi que no puedes acceder a esta web.
            </p>
            <p className={styles.note}>
              Si has respondido por error, recarga la pagina para volver a comprobarlo.
            </p>
          </>
        ) : (
          <>
            <p className={styles.text}>
              Confirma si eres mayor de 18 anos para continuar.
            </p>

            <div className={styles.actions}>
              <button type="button" className={styles.primaryButton} onClick={onAccept}>
                Entrar en la web
              </button>
              <button type="button" className={styles.secondaryButton} onClick={onReject}>
                Soy menor de edad
              </button>
            </div>
          </>
        )}

        <nav className={styles.links} aria-label="Informacion legal">
          <Link className={styles.link} to="/aviso-legal">
            Aviso legal
          </Link>
          <Link className={styles.link} to="/privacidad">
            Privacidad
          </Link>
          <Link className={styles.link} to="/cookies">
            Cookies
          </Link>
        </nav>
      </section>
    </div>
  )
}

export default AgeGate
