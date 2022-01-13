import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Releases from '@components/releases'

function releases() {
    return (
        <div>
            <Head>
                <title>Kimmercore</title>
                <link rel="icon" href="/public/kimmercore-logo.png" />
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Releases
                </p>

                <Releases description="Kanker" title="Kanker piepkicks" />

            </main>

            <Footer />
        </div>
    )
}

export default releases
