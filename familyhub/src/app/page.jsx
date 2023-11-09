import Navigation from './components/navigation'
import Header from './components/header'
import { DeviceFrameset } from 'react-device-frameset'
import {isBrowser} from 'react-device-detect';
import 'react-device-frameset/styles/marvel-devices.min.css'
import './globals.css'

function Picture() {
  return(
    <div className="bg-slate-200 p-8 rounded-full border-4 border-amber-300 ">
    </div>
  )
}

function Event() {
  return(
    <div className="bg-amber-100 p-4 w-1/2 rounded-md flex flex-col ">
      <div>Dec 22</div>
      <div className="">Body Improvement Club Party</div>
    </div>
  )
}

function Poll() {
  return(
    <div className="bg-amber-100 p-2 rounded-md flex flex-row items-center gap-2">
      <div className="bg-blue-400 rounded-full p-5"></div>
      <div className="text-sm">What should I make for dinner??</div>
    </div>
  )
}

export default function Page() {
    return (
      <main className="">
        <Header title = "Home"/>
        <div className="mx-4 py-4 flex gap-4 flex-col">
          <div className="px-2">
          <form>
            <label className="mb-2 w">How are you feeling?
              <input type="text" className="bg-slate-200 w-full rounded-md p-2 border-2 border-black mt-2"/>
            </label>
          </form>
          </div>
          <div className="flex gap-4 flex-col px-2">
            <p>Family Members</p>
            <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
              <Picture/>
              <Picture/>
              <Picture/>
              <Picture/>
              <Picture/>
              <Picture/>
            </div>
          </div>
          <div className="flex gap-4 flex-col px-2">
            <p>Upcoming Events</p>
            <div className="overflow-auto whitespace-nowrap flex flex-row gap-4">
              <Event/>
              <Event/>
              <Event/>
            </div>
          </div>
          <div className="flex gap-4 flex-col px-2">
            <p>Recent Polls</p>
            <div className="overflow-auto whitespace-nowrap flex flex-col gap-2">
              <Poll/>
              <Poll/>
            </div>
          </div>
        </div>
        <Navigation page = 'home'/>
      </main>
    )
  }



