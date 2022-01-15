import Head from 'next/head'
import React from "react";
import Link from "next/link";
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimmercore</title>

        <link rel="shortcut icon" href="/public/ico.ico" type="image/x-icon"/>

      </Head>

      <main>
        <Header/>
        <div className="relative overflow-hidden p-20">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font font-extrabold tracking-tight text-gray-50 sm:text-6xl">
                  Kimmercore
                </h1>
                <p className="mt-4 text-xl text-gray-100">Gabber Reimagined.</p>
              </div>
              <div>
                <div className="mt-10">
                  <div aria-hidden="true" className=" lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <img src="https://i1.sndcdn.com/avatars-tMz4gJ5GGq3KjZP1-w86CYQ-t500x500.jpg" alt="kimmercore him self." className="w-full h-full object-center object-cover"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
