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

    const [postTitle,setTitle] = useState("");
    const [postCaption,setCaption] = useState("");
    const [postTags,setTags] = useState("");

    const hiddenFileInput = useRef(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    };

    const handleCaptionChange = (e) => {
        setCaption(e.target.value)
    };

    const handleTagsChange = (e) => {
        setTags(e.target.value)
    };

    function savePost(caption, title, tags) {
        let date = new Date()
        let timeStamp = date.toLocaleString()
        let newTimeStamp = JSON.stringify(timeStamp)
        let tagList = tags.split(',')
        tagList = JSON.stringify(tagList)
        let newPostJsonString = `{"photoURL": "https://media.discordapp.net/attachments/1160247020292948089/1184008395385221193/1200px-NH_Cats-2326158290.jpg?ex=658a68bf&is=6577f3bf&hm=a2f9f148b983ae0ff9595c0b10e4cebf84140f2471a334f95de0af8ba06b8d45&=&format=webp&width=1574&height=886",
                        "caption": "${caption}",
                        "postedBy": "${groupData.user.myName}",
                        "memberIcon": "${groupData.user.myProfilePhotoURL}",
                        "memberBorderColor": "${groupData.user.myBorderColor}",
                        "title": "${title}",
                        "timeStamp": ${newTimeStamp},
                        "tags": ${tagList}
                                  }`
        // save to global JSON data
        let temp = groupData
        temp.memories.posts.unshift(JSON.parse(newPostJsonString))
    }

    return (
        <main>
            <Header title="New Post" backPost="Yes"/>
            <div id="content" className="pt-4">
                <div className="mx-4 pb-4 flex gap-2 flex-col text-black">
                    {selectedImage && (
                        <div>
                            <img
                                id={'postImage'}
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
                                setSelectedImage(event.target.files[0]);
                            }}
                            style={{display: 'none'}}
                        />
                    </button>}
                    <input type="text"
                           value={postTitle}
                           onChange={handleTitleChange}
                           className="bg-gray-200 text-black w-full px-3 rounded-lg border-2 py-2 border-gray-400 drop-shadow-md text-regular"
                           placeholder="Enter title..."/>
                    <textarea
                        value={postCaption}
                        onChange={handleCaptionChange}
                        className="bg-gray-200 rounded-lg px-3 py-2 w-full h-24 items-start resize-none text-regular border-2 border-gray-400 drop-shadow-md leading-tight"
                        placeholder="Enter caption..."/>
                    <input type="text"
                           value={postTags}
                           onChange={handleTagsChange}
                           className="bg-gray-200 text-black w-full px-3 rounded-lg border-2 py-2 border-gray-400 drop-shadow-md text-regular"
                           placeholder="Enter tags..."/>
                    <div className="flex flex-row w-full gap-2 justify-between text-medium">
                        <Link href="memories"
                            className="bg-gray-300 hover:bg-gray-400 text-center py-3 w-1/2 rounded-lg">Cancel
                        </Link>
                        <Link href="memories"
                              className="dark-theme-color post-hover text-center py-3 w-1/2 rounded-lg"
                        >
                        <button
                            onClick={() => {
                                savePost(postCaption, postTitle, postTags);
                            }}
                        >Post
                        </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Navigation/>
        </main>
    )
}