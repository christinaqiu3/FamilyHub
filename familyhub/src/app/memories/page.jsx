'use client'
import Header from "../components/header";
import Navigation from "../components/navigation";
import Image from "next/image";
import React, {useState, useContext} from 'react'
import {GroupContext, GroupData, GroupSetterData} from '../providers'
import "./memories.css"

function Post({icon, color, caption, image}) {
    return(
        <div className="post-content">
            <img
                src="https://64.media.tumblr.com/bff48b81714434830009b585a56bcfb6/5a69653ddc705238-72/s640x960/5c68eda0ec89ab529735e1f0d3eb6d167ef3ad1b.png"
                alt="post"
                className="post-image"
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

export default function Page() {
    let {groupData} = useContext(GroupData)
    let {setGroupData} = useContext(GroupSetterData)

    return (
        <main>
            <Header title = "Check-in"/>
            <div id="options-bar" className="py-2">
                    <div id="upload-btn">
                        <Image src='/upload.svg' alt='upload' width={20} height={20} priority/>
                    </div>
                    <div id="search-bar">
                        <div style={{
                            margin: '0px 7px'
                        }}>
                            <Image src='/search.svg' alt='search' width={27} height={27} priority/>
                        </div>
                        Search
                    </div>
                </div>
            <div id="content" className="pb-4">
                <div id="posts" className="drop-shadow-lg">
                    {groupData.memories.posts.map((row, index) => (
                        <Post key={index}
                            icon = {row.photoURL}
                            color = {row.memberBorderColor}
                            caption = {row.caption}
                        />
                    ))}
                </div>
            </div>

            <Navigation page = 'memories' className=""/>
        </main>
    )
}