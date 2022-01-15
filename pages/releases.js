import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Releases from '@components/releases'

function releases() {
    return (
        <div>
            <Head>
                <title>Kimmercore</title>
                <link rel="shortcut icon" href="/public/ico.ico" type="image/x-icon"/>
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Releases
                </p>

                <div className="flex grid-rows-4 grid-flow-col gap-4 justify-center p-5">

                    <Releases title="Broccoli Fuck (Kimmercore's Rimmercore Piep Fark Remix)" description="GPF, RiotShift, Kimmercore" link="https://soundcloud.com/kimmercore/gpf-broccoli-fuck-kimmercores-piepkanker-fuck-up" artwork="https://i.imgur.com/FRP1VRv.jpeg" />
                    <Releases title="Drankorgel" description="Equal2 & Kimmercore" link="https://soundcloud.com/partyraiserrecordings/equal2-kimmercore-drankorgel" artwork="https://i1.sndcdn.com/artworks-Qgao5eSkDHQEgfDr-qiJfMg-t500x500.jpg" />

                </div>



            </main>

            <Footer />
        </div>
    )
}

export default releases
