import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

function socials() {
    return (
        <div>
            <Head>
                <title>Kimmercore</title>
                <link rel="icon" href="/img/kimmercore-logo.png" />
            </Head>

            <main>
                <Header />
                <div class="flex justify-center content-center">
                    <div class="grid grid-cols-2 gap-6 m-52">
                        <button className="hover:scale-105 transition ease-in-out">
                            <a href="https://soundcloud.com/kimmercore" target="_blank" rel="noreferrer">
                                <img src="/img/soundcloud.svg" className="h-28 w-28" />
                            </a>
                        </button>
                        <button className="hover:scale-105 transition ease-in-out">
                            <a href="https://open.spotify.com/artist/14Htf1Vzv8Wrb5CfW2zmZs?si=Dbr_3MYvQxSxFE1yoh77xQ" target="_blank" rel="noreferrer">
                                <img src="/img/spotify.svg" className="h-28 w-28" />
                            </a>
                        </button>
                        <button className="hover:scale-105 transition ease-in-out">
                            <a href="https://www.youtube.com/c/Kimmercore" target="_blank" rel="noreferrer">
                                <img src="/img/youtube.svg" className="h-28 w-28" />
                            </a>
                        </button>
                        <button className="hover:scale-105 transition ease-in-out">
                            <a href="https://www.instagram.com/kimmercore/" target="_blank" rel="noreferrer">
                                <img src="/img/instagram.svg" className="h-28 w-28" />
                            </a>
                        </button>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}

export default socials
