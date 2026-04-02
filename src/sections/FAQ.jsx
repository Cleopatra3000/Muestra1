import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    q: 'Como definirias tu estilo?',
    a: 'Soy una persona aventurera, cercana y con ganas de vivir experiencias diferentes.',
  },
  {
    q: 'Que tipo de planes te gustan?',
    a: 'Me gustan las escapadas, descubrir lugares nuevos y compartir buenos momentos.',
  },
  {
    q: 'Donde estas?',
    a: 'Estoy en Madrid.',
  },
  {
    q: 'Como puedo contactarte?',
    a: 'El contacto es voluntario y se realiza unicamente por WhatsApp.',
  },
  {
    q: 'La web ofrece algo ilegal?',
    a: 'No. Es una presentacion personal para adultos dentro de un marco legal y respetuoso.',
  },
  {
    q: 'La pagina esta dirigida a menores?',
    a: 'No. El acceso esta limitado a personas mayores de edad.',
  },
]

const FAQ = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Preguntas frecuentes</h2>

      <div className={styles.list}>
        {FAQ_ITEMS.map((item) => (
          <details key={item.q} className={styles.item}>
            <summary className={styles.summary}>
              <span className={styles.question}>{item.q}</span>
              <span className={styles.icon} aria-hidden="true">
                +
              </span>
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
