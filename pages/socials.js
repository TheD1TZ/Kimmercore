import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function socials() {
    return (
        <div>
            <Head>
                <title>Kimmercore</title>
                <link rel="icon" href="/public/kimmercore-logo.png" />
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Socials
                </p>
            </main>

            <Footer />
        </div>
    )
}

export default socials
