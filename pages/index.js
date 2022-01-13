import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimmercore</title>
        <link rel="icon" href="/public/kimmercore-logo.png" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <div className="flex justify-center align-middle">
          <p className="description">
            Home
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
