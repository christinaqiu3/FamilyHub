"use client";

import Navigation from '../components/navigation'
import Header from '../components/header'
import { DeviceFrameset } from 'react-device-frameset'
import {isBrowser} from 'react-device-detect';
import 'react-device-frameset/styles/marvel-devices.min.css'
import '../globals.css'
import React, {useState} from 'react'

function Status() {
    return(
        <div className="flex flex-col gap-1">
            <div className="p-8 rounded-full border-4 border-amber-300 "></div>
            <div className="border-2 text-center border-slate-950 rounded-md w-full p-2">Status</div>
        </div>
    )
}

function Poll() {
    return(
        <div className="flex flex-col gap-2 bg-amber-100 rounded-lg drop-shadow-lg p-4">
            <div className="flex flex-row items-center gap-2">
                <div className="bg-blue-400 rounded-full p-5"></div>
                <div className="text-sm">What should I make for dinner??</div>
            </div>
            <div className="w-full bg-white px-4 py-1 rounded-full drop-shadow-md text-gray-600">
                Spaghetti
            </div>
            <div className="w-full bg-white px-4 py-1 rounded-full drop-shadow-md text-gray-600">
                Ramen
            </div>
        </div>
    )
}


export default function Page() {
    const [isToggled, setToggle] = useState(false);

    return (
        <main>
            <Header title = "Check-in"/>
            <div className="mx-4 py-4 flex gap-4 flex-col text-gray-800">
                <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
                    <Status/>
                    <Status/>
                    <Status/>
                    <Status/>
                    <Status/>
                    <Status/>
                </div>
                <div className="flex justify-between w-full">
                    <div class="">Polls</div>
                    <button onClick={() => setToggle(true)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 11.5C23 17.2593 18.1157 22 12 22C5.88433 22 1 17.2593 1 11.5C1 5.74069 5.88433 1 12 1C18.1157 1 23 5.74069 23 11.5Z" fill="white" stroke="black" stroke-width="2"/>
                            <path d="M23 11.5C23 17.2593 18.1157 22 12 22C5.88433 22 1 17.2593 1 11.5C1 5.74069 5.88433 1 12 1C18.1157 1 23 5.74069 23 11.5Z" fill="white" stroke="black" stroke-width="2"/>
                            <rect x="11.2002" y="5.3667" width="1.6" height="12.2667" fill="black"/>
                            <rect x="5.6001" y="10.7334" width="12.8" height="1.53333" fill="black"/>
                        </svg>
                    </button>
                </div>
                
                <Poll/>
                <Poll/>
            </div>
            {isToggled && (
                <div>
                    <div class="bg-gray-900 opacity-50 drop-shadow-lg absolute top-0 w-full h-full"></div>
                    <button class="absolute top-56 right-4" onClick={() => setToggle(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                                <path d="M24.778 9.72179C28.8504 13.7942 28.7489 20.6002 24.4244 24.9246C20.1 29.249 13.2941 29.3506 9.22165 25.2781C5.1492 21.2057 5.25077 14.3998 9.5752 10.0753C13.8996 5.75091 20.7056 5.64934 24.778 9.72179Z" fill="#FFB800" stroke="black" stroke-width="2"/>
                                <rect x="12.0972" y="13.7288" width="1.6" height="12.2667" transform="rotate(-45 12.0972 13.7288)" fill="black"/>
                                <rect x="11.9321" y="21.4834" width="12.8" height="1.53333" transform="rotate(-45 11.9321 21.4834)" fill="black"/>
                        </svg>
                    </button>
                    <div class="flex flex-col gap-2 p-4 bg-amber-100 drop-shadow-lg absolute top-64 mt-2 left-4 w-11/12 h-1/4 rounded-lg">
                        <div className="flex flex-row items-center gap-4 text-gray-400">
                            <div className="bg-blue-400 rounded-full p-5"></div>
                            <input className="px-2 py-1 w-full rounded-lg" type="text" placeholder="hello"></input>
                        </div>
                        <div className="w-full bg-white px-4 py-1 rounded-full drop-shadow-md text-gray-600">
                            Spaghetti
                        </div>
                        <div className="w-full bg-white px-4 py-1 rounded-full drop-shadow-md text-gray-600">
                            Ramen
                        </div>
                    </div>
                </div>
                
            )}
            <Navigation page = 'checkin'/>
            
        </main>
    )
}