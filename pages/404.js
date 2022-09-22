import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function Custom404() {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />

      <Hero title="404" subtitle="ページが見つかりません" />

      <figure>
        <Image src={eyecatch} alt="" layout="responsive" sizes="(min-width: 1152px) 1152px, 100vw" priority placeholder="blur" />
      </figure>
    </Container>
  )
}
