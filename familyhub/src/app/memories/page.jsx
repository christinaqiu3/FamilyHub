'use client'
import Header from "../components/header";
import Navigation from "../components/navigation";
import Image from "next/image";
import React, {useState, useEffect, useContext} from 'react'
import {GroupContext, GroupData, GroupSetterData} from '../providers'
import "./memories.css"

function Post({icon, photo, color, caption}) {
    return(
        <div className="post-content">
            <img
                src={photo}
                alt="post"
                className="post-image object-cover"
            />
            <div className="absolute z-30 bottom-0 bg-white rounded-b-lg w-full py-2 px-3 align-center content-center flex flex-row gap-2">
                <img
                    src={icon}
                    alt=""
                    className="poster-pfp"
                    style={{
                        border: `3px solid ${color}`
                    }}
                />
                <div className="text-xs truncate text-regular w-full">
                    {caption}
                </div>
            </div>
        </div>
    )
}

export const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <p>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</p>
    );

}

export default function Page() {
    let {groupData} = useContext(GroupData)
    let {setGroupData} = useContext(GroupSetterData)

    const [isZoomed, setZoomed] = React.useState(false);

    const [currImage, setCurrImage] = React.useState("");
    const [currTitle, setCurrTitle] = React.useState("");
    const [currIcon, setCurrIcon] = React.useState("");
    const [currIconColor, setCurrIconColor] = React.useState("");
    const [currCaption, setCurrCaption] = React.useState("");
    const [currTimeLabel, setCurrTimeLabel] = React.useState("");

    return (
        <main>
            <Header title = "Check-in"/>
            
            <div id="options-bar" className="py-2">
                    <div id="upload-btn">
                        <Image src='/upload.svg' alt='upload' width={20} height={20} priority/>
                    </div>
                    <div id="search-bar" className="text-regular">
                        <div style={{
                            margin: '0px 7px'
                        }}>
                            <Image src='/search.svg' alt='search' width={27} height={27} priority/>
                        </div>
                        Search
                    </div>
                </div>
            <div id="content" className="pb-4">
                {isZoomed && (
                    <div className='bg-gray-100 rounded-lg drop-shadow-xl absolute mt-4 z-20 ml-4 items-center flex flex-col gap-3'
                        style={{
                            width: 343,
                            height: 400
                        }}>
                        <button onClick={() => setZoomed(false)} className="absolute right-2 top-2 z-20">
                            <div className="bg-gray-200 hover:bg-gray-400 p-2 rounded-full opacity-50">
                                <svg fill="#000000" height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775">
                                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                                </svg>
                            </div>
                        </button>
                        <img src={currImage} className="object-cover w-full h-2/3 drop-shadow-md rounded-t-lg "/>
                        <div className="w-full flex flex-row px-3 gap-3">
                            <img src={currIcon} className="rounded-full h-16 w-16" 
                                style={{
                                    border: `4px solid ${currIconColor}`
                            }}/>
                            <div className="w-full flex flex-col">
                                <div className="text-bold text-lg">{currTitle}</div>
                                <div className="leading-tight text-regular overflow-scroll h-16">{currCaption}</div>
                            </div>
                            
                        </div>
                        <div className="absolute right-2 bottom-1 text-gray-400 text-regular text-sm">
                            {currTimeLabel}
                        </div>
                    </div>
                )}
                {isZoomed && (
                    <div className="absolute w-full bg-gray-900" style={{
                        height: 602,
                        width: 376,
                        zIndex: 15,
                        opacity: .4
                    }}>
            
                    </div>
                )}
                <div id="posts" className="drop-shadow-lg">
                    {groupData.memories.posts.map((row, index) => (
                        <button onClick={() => {
                            setZoomed(true);
                            setCurrImage(row.photoURL);
                            setCurrTitle(row.title);
                            setCurrIcon(row.memberIcon);
                            setCurrIconColor(row.memberBorderColor);
                            setCurrCaption(row.caption);
                            setCurrTimeLabel(row.timeStamp);
                        }}>
                            <Post key={index}
                                photo = {row.photoURL}
                                icon = {row.memberIcon}
                                color = {row.memberBorderColor}
                                caption = {row.caption}
                            />
                        </button>
                        
                    ))}
                </div>
            </div>

            <Navigation page = 'memories' className=""/>
        </main>
    )
}