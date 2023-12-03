"use client";
import Navigation from '../components/navigation'
import Header from '../components/header'
import '../globals.css'
import Image from "next/image";
import './calendar.css'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useClient } from "next/client";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2023, 10, 1),
      end: new Date(2023, 10, 1),
  },
  {
      title: "Vacation",
      start: new Date(2023, 10, 7),
      end: new Date(2023, 10, 10),
  },
  {
      title: "Conference",
      start: new Date(2023, 10, 20),
      end: new Date(2023, 10, 23),
  },
];

function Picture() {
    return(
      <div className="p-8 rounded-full border-4 border-amber-300 ">
      </div>
    )
  }

function Cal() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dates = Array.from({ length: 31 }, (_, index) => index + 1);
    const eventDay = 5;

    return(
        <div className="border-2 border-slate-950 rounded-md w-full text-black">
        <div className="grid grid-cols-8 gap-4-custom bg-black w-full h-5 flex">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-right font-bold text-white bg-black h-custom border-2 border-gray">
            {day}
          </div>
        ))}
        </div>
        <div className="px-2 grid grid-cols-7 grid-rows-6 gap-x-3 gap-y-8 text-left ">
        {dates.map((date, index) => (
          <div key={index} className="flex-col justify-left items-left text-black">
            {date}
            {/* {date === eventDay ? (
              <div className="p-2 rounded-full border-2 border-amber-300"></div>
            ) : null} */}
          </div>
        ))}
        </div>
        </div>
    )
}


export default function Page() {

    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

             if (
              ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                (d4 <= d3) )
              )
            {   
                alert("CLASH"); 
                break;
             }
    
        }
        
        
        setAllEvents([...allEvents, newEvent]);
    }
    

    return (
        <main>
            <Header title = "Calendar"/>
            <div className="mx-4 py-4 flex gap-4 flex-col">

                <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
                <div className="flex flex-col gap-1 w-full">
                    <div className="border-2 text-center border-slate-950 rounded-md w-full p-1 text-black flex">
                    <Image src='/plus.png' alt='search' width={27} height={27} />
                    <span style={{ marginLeft: '20px' }}>Add New</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full">
                    <div className="border-2 text-center border-slate-950 rounded-md w-full p-1 text-black flex">
                    <span style={{ marginRight: '30px', marginLeft: '35px'}}>Monthly</span>
                    <Image src='/arrow-down.png' alt='search' width={27} height={27} /> </div>
                </div>
                </div>

                <div className="w-full">
                <div className="w-full flex justify-center items-center text-black flex">
                    <Image src='/arrow-icon-side.png' alt='search' width={20} height={20} style={{ transform: 'rotate(180deg)', marginRight: '8px' }}/>
                    <span style={{ marginRight: '10px', marginLeft: '10px' }}>October 2023</span>
                    <Image src='/arrow-icon-side.png' alt='search' width={20} height={20} />
                    </div>
                </div>

                

        
                
                <div>
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />




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