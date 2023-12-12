"use client";

import Header from "../components/header";
import Navigation from "../components/navigation";
import Link from 'next/link'
import {GroupContext, GroupData, GroupSetterData} from '../providers'
import React, {useContext} from 'react'


function Event({icon, title, date, owner, border}) {
    return (
      <div className="light-theme-color p-4 w-1/2 rounded-md flex flex-col flex-wrap drop-shadow-md">
          <div>{date}</div>
          <div className="text-sm">{title}</div>
          <div className="flex flex-row pt-2 gap-6">
              
            <img src={icon} alt=""
                  style={{
                      width: 40, 
                      height: 40, 
                      borderRadius: 100,
                      border: `3px solid ${border}`
                  }}
            />
            
          </div>
      </div>
  )
}

function Poll({icon, title, userData}) {
  return (
      <Link className="light-theme-color p-2 rounded-md flex flex-row items-center gap-2 drop-shadow-md"
              href = '/checkin'>
          <img src={userData.memberProfilePhotoURL} alt=""
              style={{
                  width: 40, 
                  height: 40, 
                  borderRadius: 100,
                  border: `3px solid ${userData.memberBorderColor}`                  
              }}
          />
          <div className="flex flex-row justify-between w-full">
              <div className="text-sm">{title}</div>
              <div className="text-xs text-gray-400 font-thin pt-5">3 votes</div>
          </div>
      </Link>
  )
}

export default function Page() {
    let {group} = useContext(GroupContext);
    let {groupData} = useContext(GroupData);
    let {setGroupData} = useContext(GroupSetterData);
    const user = groupData.user;

    return (
        <main>
            <Header title = "Lolly's Profile"/>
            <div id="content" className="pt-4">
              <div className="mx-4 pb-4 flex gap-4 flex-col text-black">
                <div className="flex flex-row w-full gap-4">
                  <img src="https://i.imgur.com/CiXUjrQ.jpg" style={{
                    width: 150, 
                    height: 150, 
                    borderRadius: 100, 
                    border: `8px solid #57769b`
                  }}></img>
                  <div className="flex flex-col text-black gap-2">
                    <div className="text-medium flex flex-row gap-3" style={{fontSize: 22}}>
                      <div>🥴</div>
                      <div>Lolly</div>
                    </div>
                    <div className="text-regular med-theme-color rounded-lg p-4 w-full">
                        :3
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row w-full gap-4 justify-between">
                    <div className="med-theme-color rounded-lg w-3/5 py-2 text-black text-medium text-center">Birthday</div>
                    <div className="bg-gray-200 text-gray-600 text-regular rounded-lg py-2 w-full text-center">March 27, 2010</div>
                  </div>
                  <div className="flex flex-row w-full gap-4 justify-between">
                    <div className="med-theme-color rounded-lg w-3/5 py-2 text-black text-medium text-center">Phone #</div>
                    <div className="bg-gray-200 text-gray-600 text-regular rounded-lg py-2 w-full text-center">123-456-7890</div>
                  </div>
                </div>

                <div className="flex gap-2 flex-col px-2">
                  <div className="text-medium">Created Polls</div>
                  <div className="overflow-auto whitespace-nowrap flex flex-col gap-2">
                      {groupData.checkin.polls.map((row, index) => (
                          // Check if the owner of the poll is the current user
                          row.userData.owner === "Lolly" && (
                              <Poll
                                  key={index}
                                  userData={row.userData}
                                  icon={row.memberProfilePhotoURL}
                                  title={row.title}
                                  border={row.memberBorderColor}
                              />
                          )
                      ))}
                  </div>
                </div>

                <div className="flex gap-2 flex-col px-2">
                  <div className="text-medium">Created Events</div>
                  <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
                      {groupData.calendar.events.map((row, index) => (
                          // Check if the owner of the event is the current user
                          row.owner === "Lolly" && (
                              <Event
                                  key={index}
                                  date={row.date}
                                  title={row.title}
                                  icon={row.memberProfilePhotoURL}
                                  border={row.memberBorderColor}
                              />
                          )
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <Navigation/>
        </main>
    )
}