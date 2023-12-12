"use client";

import Header from "../components/header";
import Navigation from "../components/navigation";
import Link from 'next/link'
import {GroupContext, GroupData, GroupSetterData} from '../providers'
import React, {useContext, useRef, useState} from 'react'

export default function Page() {
    let {group} = useContext(GroupContext);
    let {groupData} = useContext(GroupData);
    let {setGroupData} = useContext(GroupSetterData);
    const [selectedImage, setSelectedImage] = useState(null);

    const hiddenFileInput = useRef(null);

    return (
        <main>
            <Header title="New Post" backPost="Yes"/>
            <div id="content" className="pt-4">
                <div className="mx-4 pb-4 flex gap-2 flex-col text-black">
                    {selectedImage && (
                        <div>
                            <img
                                className="bg-gray-100 hover:bg-gray-200 border-2 border-gray-500 drop-shadow-md rounded-lg flex items-center justify-center"
                                alt="not found"
                                src={URL.createObjectURL(selectedImage)}
                            />
                            <button onClick={() => setSelectedImage(null)}>Remove</button>
                        </div>
                    )}
                    {!selectedImage && <button
                        className="bg-gray-100 hover:bg-gray-200 border-2 border-gray-500 drop-shadow-md w-full h-60 rounded-lg flex items-center justify-center"
                        onClick={() => {hiddenFileInput.current.click()}}
                    >
                        <div className="rounded-full p-4 border-2 border-gray-400">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M50 0V100" stroke="#9ca3af" stroke-width="2"/>
                                <path d="M0 50L100 50" stroke="#9ca3af" stroke-width="2"/>
                            </svg>
                        </div>
                        <input
                            type="file"
                            name="myImage"
                            ref={hiddenFileInput}
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                setSelectedImage(event.target.files[0]);
                            }}
                            style={{display: 'none'}}
                        />
                    </button>}
                    <input type="text"
                           className="bg-gray-200 text-black w-full px-3 rounded-lg border-2 py-2 border-gray-400 drop-shadow-md text-regular"
                           placeholder="Enter title..."/>
                    <textarea
                        className="bg-gray-200 rounded-lg px-3 py-2 w-full h-24 items-start resize-none text-regular border-2 border-gray-400 drop-shadow-md leading-tight"
                        placeholder="Enter caption..."/>
                    <input type="text"
                           className="bg-gray-200 text-black w-full px-3 rounded-lg border-2 py-2 border-gray-400 drop-shadow-md text-regular"
                           placeholder="Enter tags..."/>
                    <div className="flex flex-row w-full gap-2 justify-between text-medium">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-center py-3 w-1/2 rounded-lg text-gray-500">Cancel
                        </button>
                        <button
                            className="light-theme-color post-hover text-center py-3 w-1/2 rounded-lg text-gray-500">Post
                        </button>
                    </div>
                </div>
            </div>

            <Navigation/>
        </main>
    )
}