import FooterSection from './footer/FooterSection'
import Header from './header/Header'
import MainContent from './main/MainContent'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.appShell}>
      <section className={styles.headerRegion}>
        <div className={styles.container}>
          <Header />
        </div>
      </section>

      <MainContent>{children}</MainContent>

      <FooterSection />
    </div>
  )
}

export default Layout
