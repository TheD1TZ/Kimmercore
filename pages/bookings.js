import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function bookings() {
    return (
        <div>
            <Head>
                <title>Kimmercore</title>
                <link rel="shortcut icon" href="/public/ico.ico" type="image/x-icon"/>
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Bookings
                </p>
            </main>

            <Footer />
        </div>
    )
}

export default bookings
