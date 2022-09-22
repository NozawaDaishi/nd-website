import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Image from 'next/image'
import notFound from 'images/black-hole.png'
import styles from 'styles/404.module.css'

export default function Custom404() {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />
      <div className={styles.flexContainer}>
        <Hero title="404" subtitle="ページが見つかりません" notFoundImageOn />
      </div>
    </Container>
  )
}
