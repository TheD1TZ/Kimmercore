import React from 'react'
import Image from 'next/image'

function releases({ description, title, id }) {
    return (
        <div>
            <button className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 ">
                <a href="#" target="_blank" rel="noreferrer">
                    <Image className="w-full" alt="Image" src="/public/sex.jpg" width="400" height="400" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                            {description}
                        </p>
                    </div>
                </a>
            </button>
        </div >
    )
}

export default releases
