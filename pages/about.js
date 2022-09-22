import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import Accordion from 'components/accordion'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About() {
  return (
    <Container>
      <Meta pageTitle="アバウト" pageDesc="About development activities" pageImg={eyecatch.src} pageImgW={eyecatch.width} pageImgH={eyecatch.height} />

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image src={eyecatch} alt="" layout="responsive" sizes="(min-width: 1152px) 1152px, 100vw" priority placeholder="blur" />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>Nozawa Daishiのアウトプット用ブログサイトです。あらゆる技術を学んだ際や作成したアプリ、プログラムをこのサイトに集約します。</p>
            <h2>エンジニアとして目指していること</h2>
            <p>
              フロントエンドやバックエンドのWebアプリ開発者としてスペシャリストになることで、将来的にはフルスタックエンジニアを目指しています。一人でなんでもできる人が結局かっこいいですよね。私自身は、エンジニアになって世の中を変えたいとかは思わないのですが、社会に残るような素晴らしいサービスやアプリを作りたいとは思っています。誰かの役に立つものを作ることで誰かが楽になったり幸福感を得られるようなサービスの創造を目指しています。
            </p>
            <h3>新しいことへのチャレンジ</h3>
            <p>経験したことのない未知の技術に対して、恐れずに接することで、社会の変化にフレキシブルに対応するエンジニアがこの先生き残れると考えています。</p>
            <h3>資格と業務</h3>
            <p>
              巷では資格は取る必要がないと言われていますが、私はそうは思いません。実務では業務レベルの知識を得られるのに対して、範囲がとても限定的になってしまいます。資格試験の勉強をすることで体系的に業務経験で足りない部分を補う、或いは経験を整理するということができるようになります。なので、私は資格の勉強を続けています。
            </p>
            <h3>取得資格一覧</h3>
            <ul>
              <li>基本情報技術者試験</li>
              <li>情報セキュリティマネジメント</li>
              <li>日商簿記3級</li>
              <li>ORACLE MASTER Bronze 11g SQL基礎1</li>
              <li>オラクル認定 Javaプログラマ試験(Bronze SE7/8)</li>
              <li>文部科学省後援 情報検定 情報システム試験 システムエンジニア</li>
              <li>CG-ARTS協会 CGクリエイター検定 ベーシック</li>
            </ul>

            <h2>FAQ</h2>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
              </p>
            </Accordion>
            <Accordion heading="プログラミングのポイントについて">
              <p>
                プログラミングのポイントは作りたいものを作ることです。楽しいことから思いつき、目標とゴールを決め、そこに向かってさまざまな課題を設定していきながら、プログラムを作っていきます。
              </p>
            </Accordion>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
