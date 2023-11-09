import Navigation from '../components/navigation'
import Header from '../components/header'
import { DeviceFrameset } from 'react-device-frameset'
import {isBrowser} from 'react-device-detect';
import 'react-device-frameset/styles/marvel-devices.min.css'
import '../globals.css'

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
    return (
        <main>
            <Header title = "Home"/>
            <div className="mx-4 py-4 flex gap-4 flex-col">
                <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
                    <Status/>
                    <Status/>
                    <Status/>
                    <Status/>
                    <Status/>
                    <Status/>
                </div>
                <div className="w-full">
                    Polls
                </div>
                <Poll/>
                <Poll/>
            </div>
            <Navigation page = 'home'/>
        </main>
    )
}