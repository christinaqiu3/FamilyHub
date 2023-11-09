import Navigation from '../components/navigation'
import Header from '../components/header'
import { DeviceFrameset } from 'react-device-frameset'
import {isBrowser} from 'react-device-detect';
import 'react-device-frameset/styles/marvel-devices.min.css'
import '../globals.css'
import Image from "next/image";
import './calendar.css'


function Picture() {
    return(
      <div className="p-8 rounded-full border-4 border-amber-300 ">
      </div>
    )
  }

function Cal() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dates = Array.from({ length: 31 }, (_, index) => index + 1);

    return(
        <div className="border-2 border-slate-950 rounded-md w-full text-black">
        <div className="grid grid-cols-8 gap-4-custom bg-black w-full h-5 flex">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-right font-bold text-white bg-black h-custom ${index < 6 ? 'border-2 border-black p-20' : ''}">
            {day}
          </div>
        ))}
        </div>
        <div className="px-2 grid grid-cols-7 grid-rows-6 gap-x-3 gap-y-8 text-left ">
        {dates.map((date, index) => (
          <div key={index} className="flex justify-left items-left text-black">
            {date}
          </div>
        ))}
        </div>
        </div>
    )
}


export default function Page() {
    

    return (
        <main>
            <Header title = "Calendar"/>
            <div className="mx-4 py-4 flex gap-4 flex-col">

                <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
                <div className="flex flex-col gap-1 w-full">
                    <div className="border-2 text-center border-slate-950 rounded-md w-full p-1 text-black flex">
                    <Image src='/plus-icon.png' alt='search' width={27} height={27} />
                    <span style={{ marginLeft: '20px' }}>Add New</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <div className="border-2 text-center border-slate-950 rounded-md w-full p-1 text-black flex">
                    <span style={{ marginRight: '30px', marginLeft: '35px'}}>Monthly</span>
                    <Image src='/arrow-icon.png' alt='search' width={27} height={27} /> </div>
                </div>
                </div>

                <div className="w-full">
                <div className="w-full flex justify-center items-center text-black flex">
                    <Image src='/arrow-side.png' alt='search' width={27} height={27} style={{ transform: 'rotate(180deg)', marginRight: '8px' }}/>
                    <span style={{ marginRight: '10px', marginLeft: '10px' }}>October 2023</span>
                    <Image src='/arrow-side.png' alt='search' width={27} height={27} />
                    </div>
                </div>



                <Cal></Cal>

                <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
              <Picture/>
              <Picture/>
              <Picture/>
              <Picture/>
              <Picture/>
              <Picture/>
            </div>


            </div>
            <Navigation page = 'calendar'/>
        </main>
    )
}