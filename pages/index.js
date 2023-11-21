import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
          <form>
              <label>Уровень атакующего:</label><input id="attackerLevel"/>
              <input type="submit">Submit</input>
          </form>
      </main>

      <Footer />
    </div>
  )
}
