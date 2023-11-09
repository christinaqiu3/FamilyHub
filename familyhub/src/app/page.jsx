"use client";

import Navigation from './components/navigation'
import Header from './components/header'
import { DeviceFrameset } from 'react-device-frameset'
import {isBrowser} from 'react-device-detect';
import 'react-device-frameset/styles/marvel-devices.min.css'
import './globals.css'
import React, {useState} from 'react'

function Picture() {
  return(
    <div className="p-8 rounded-full border-4 border-amber-300 ">
    </div>
  )
}

function RSVP() {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };

  return(
    <button onClick={handleToggle}>

      {isToggled ? 
      <div className="bg-gray-300 text-gray-400 px-2 py-1 rounded-full">RSVP</div>
      :
      <div className="bg-amber-500 px-2 py-1 rounded-full drop-shadow-sm">RSVP</div>
      }
    </button>
  )
}

function Event() {
  return(
    <div className="bg-amber-100 p-4 w-1/2 rounded-md flex flex-col flex-wrap drop-shadow-md">
      <div>Date</div>
      <div className="text-sm">Description</div>
      <div className="flex flex-row pt-2 gap-4">
        <div className="bg-gray-400 rounded-full p-4">
          
        </div>
        <RSVP/>
      </div>
    </div>
  )
}

function Poll() {
  return(
    <div className="bg-amber-100 p-2 rounded-md flex flex-row items-center gap-2 drop-shadow-md">
      <div className="bg-blue-400 rounded-full p-4"></div>
      <div className="text-sm">What should I make for dinner??</div>
      <div className="text-xs text-gray-400 font-thin pt-5">3 votes</div>
    </div>
  )
}

export default function Page() {
    return (
      <main className="relative">
        <Header title = "Home"/>
        <div className="mx-4 py-3 flex gap-2 flex-col text-gray-800">
          <div className="px-2">
          <form>
            <label className="mb-1">How are you feeling?
              <input type="text" className="w-full rounded-md p-2 border-2 border-black mt-2 drop-shadow-md"/>
            </label>
          </form>
          </div>
          <div className="flex gap-2 flex-col px-2">
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
            <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
              <Event/>
              <Event/>
              <Event/>
            </div>
          </div>
          <div className="flex gap-2 flex-col px-2">
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



