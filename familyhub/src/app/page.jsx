"use client";

import Navigation from './components/navigation'
import Header from './components/header'
import './globals.css'
import React, {useState} from 'react'
import "./home.css"

function Picture() {
    return (
        <div className="p-8 rounded-full border-4 profile-border-color"/>
    )
}

function RSVP() {
    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggled);
    };

    return (
        <button onClick={handleToggle}>

            {isToggled ?
                <div className="bg-gray-300 text-gray-400 px-2 py-1 rounded-full">RSVP</div>
                :
                <div className="dark-theme-color px-2 py-1 rounded-full drop-shadow-sm">RSVP</div>
            }
        </button>
    )
}

function Event() {
    return (
        <div className="light-theme-color p-4 w-1/2 rounded-md flex flex-col flex-wrap drop-shadow-md">
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
    return (
        <div className="light-theme-color p-2 rounded-md flex flex-row items-center gap-2 drop-shadow-md">
            <div className="bg-blue-400 rounded-full p-4"/>
            <div className="text-sm">What should I make for dinner??</div>
            <div className="text-xs text-gray-400 font-thin pt-5">3 votes</div>
        </div>
    )
}

function EditIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1_92_1245" maskUnits="userSpaceOnUse" x="-0.00292969" y="0.920166" width="24"
                  height="24" fill="black">
                <rect fill="white" x="-0.00292969" y="0.920166" width="24" height="24"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9.73576 5.57832L10.5083 4.81182C11.1751 4.15033 11.1751 3.07227 10.5083 2.41078C9.849 1.75663 8.7855 1.75663 8.12617 2.41078L7.31838 3.21222C7.8819 4.20939 8.71895 5.03231 9.73576 5.57832ZM5.8598 4.65933L2.37714 8.11462C1.94856 8.53983 1.73428 8.75243 1.59324 9.01423C1.45221 9.27604 1.39256 9.57194 1.27326 10.1637L1.06156 11.2139C0.99453 11.5464 0.961016 11.7127 1.05548 11.8074C1.14995 11.9022 1.3163 11.8692 1.64902 11.8032L2.73201 11.5883C3.31909 11.4718 3.61263 11.4135 3.87301 11.2751C4.13339 11.1367 4.34584 10.9259 4.77072 10.5043L8.26795 7.03459C7.3045 6.42014 6.48432 5.60927 5.8598 4.65933Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.73576 5.57832L10.5083 4.81182C11.1751 4.15033 11.1751 3.07227 10.5083 2.41078C9.849 1.75663 8.7855 1.75663 8.12617 2.41078L7.31838 3.21222C7.8819 4.20939 8.71895 5.03231 9.73576 5.57832ZM5.8598 4.65933L2.37714 8.11462C1.94856 8.53983 1.73428 8.75243 1.59324 9.01423C1.45221 9.27604 1.39256 9.57194 1.27326 10.1637L1.06156 11.2139C0.99453 11.5464 0.961016 11.7127 1.05548 11.8074C1.14995 11.9022 1.3163 11.8692 1.64902 11.8032L2.73201 11.5883C3.31909 11.4718 3.61263 11.4135 3.87301 11.2751C4.13339 11.1367 4.34584 10.9259 4.77072 10.5043L8.26795 7.03459C7.3045 6.42014 6.48432 5.60927 5.8598 4.65933Z"
                  fill="none"/>
            <path
                d="M9.73576 5.57832L9.26267 6.45934L9.9147 6.80946L10.4401 6.28821L9.73576 5.57832ZM10.5083 4.81182L9.80402 4.10193V4.10193L10.5083 4.81182ZM10.5083 2.41078L11.2126 1.70089V1.70089L10.5083 2.41078ZM8.12617 2.41078L8.83048 3.12067L8.12617 2.41078ZM7.31838 3.21222L6.61407 2.50233L6.07231 3.03982L6.44778 3.70422L7.31838 3.21222ZM5.8598 4.65933L6.6954 4.10999L6.02361 3.08814L5.15549 3.94944L5.8598 4.65933ZM2.37714 8.11462L3.08145 8.82451L3.08145 8.82451L2.37714 8.11462ZM1.59324 9.01423L0.712862 8.53996L0.712862 8.53997L1.59324 9.01423ZM1.27326 10.1637L0.292978 9.96614L0.292978 9.96614L1.27326 10.1637ZM1.06156 11.2139L2.04184 11.4115V11.4115L1.06156 11.2139ZM1.05548 11.8074L0.347301 12.5135L0.347304 12.5135L1.05548 11.8074ZM1.64902 11.8032L1.45438 10.8223H1.45438L1.64902 11.8032ZM2.73201 11.5883L2.92665 12.5691H2.92665L2.73201 11.5883ZM3.87301 11.2751L4.34246 12.1581H4.34246L3.87301 11.2751ZM4.77072 10.5043L5.47504 11.2142L4.77072 10.5043ZM8.26795 7.03459L8.97227 7.74448L9.85992 6.86381L8.80566 6.19146L8.26795 7.03459ZM10.4401 6.28821L11.2126 5.52171L9.80402 4.10193L9.03145 4.86843L10.4401 6.28821ZM11.2126 5.52171C12.2736 4.46907 12.2736 2.75353 11.2126 1.70089L9.80402 3.12067C10.0765 3.39101 10.0765 3.83159 9.80402 4.10193L11.2126 5.52171ZM11.2126 1.70089C10.1634 0.659927 8.47107 0.659925 7.42186 1.70089L8.83048 3.12067C9.09993 2.85333 9.53457 2.85333 9.80402 3.12067L11.2126 1.70089ZM7.42186 1.70089L6.61407 2.50233L8.02269 3.92211L8.83048 3.12067L7.42186 1.70089ZM6.44778 3.70422C7.10392 4.86526 8.07845 5.82343 9.26267 6.45934L10.2088 4.6973C9.35945 4.24119 8.65989 3.55352 8.18897 2.72022L6.44778 3.70422ZM5.15549 3.94944L1.67282 7.40473L3.08145 8.82451L6.56412 5.36922L5.15549 3.94944ZM1.67283 7.40473C1.28583 7.78868 0.94063 8.11716 0.712862 8.53996L2.47362 9.4885C2.52793 9.3877 2.61129 9.29097 3.08145 8.82451L1.67283 7.40473ZM0.712862 8.53997C0.485094 8.96277 0.400703 9.43175 0.292978 9.96614L2.25354 10.3614C2.38441 9.71213 2.41932 9.5893 2.47362 9.4885L0.712862 8.53997ZM0.292978 9.96614L0.0812786 11.0163L2.04184 11.4115L2.25354 10.3614L0.292978 9.96614ZM0.0812787 11.0163C0.0542806 11.1502 0.00902617 11.3614 -0.000685215 11.5478C-0.0114224 11.7538 0.00499105 12.1701 0.347301 12.5135L1.76366 11.1014C1.87482 11.2129 1.94144 11.344 1.97339 11.4638C2.0011 11.5678 1.99712 11.642 1.9966 11.6519C1.996 11.6634 1.99572 11.6541 2.00428 11.6048C2.0126 11.557 2.02429 11.4986 2.04184 11.4115L0.0812787 11.0163ZM0.347304 12.5135C0.689615 12.8568 1.10585 12.8745 1.31192 12.8644C1.4983 12.8552 1.70964 12.8106 1.84365 12.784L1.45438 10.8223C1.36725 10.8396 1.30885 10.8511 1.26097 10.8593C1.2117 10.8677 1.20235 10.8674 1.21389 10.8668C1.22378 10.8663 1.29804 10.8626 1.40187 10.8906C1.52158 10.9229 1.6525 10.9899 1.76366 11.1014L0.347304 12.5135ZM1.84365 12.784L2.92665 12.5691L2.53738 10.6074L1.45438 10.8223L1.84365 12.784ZM2.92665 12.5691C3.4568 12.464 3.92196 12.3816 4.34246 12.1581L3.40356 10.3921C3.3033 10.4454 3.18138 10.4796 2.53738 10.6074L2.92665 12.5691ZM4.34246 12.1581C4.76296 11.9345 5.09135 11.5949 5.47504 11.2142L4.06641 9.79444C3.60033 10.2569 3.50382 10.3388 3.40356 10.3921L4.34246 12.1581ZM5.47504 11.2142L8.97227 7.74448L7.56364 6.3247L4.06641 9.79444L5.47504 11.2142ZM8.80566 6.19146C7.96151 5.6531 7.24271 4.94249 6.6954 4.10999L5.02421 5.20867C5.72593 6.27605 6.64748 7.18719 7.73025 7.87772L8.80566 6.19146Z"
                fill="black" mask="url(#path-1-outside-1_92_1245)"/>
        </svg>
    )
}

function SmileIcon() {
    return (
        <button type="button" className="focus:outline-none">

            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" fill="white" stroke="black" stroke-width="2"/>
                <circle cx="8.66658" cy="11.0303" r="1.57576" fill="black"/>
                <circle cx="17.3331" cy="11.0303" r="1.57576" fill="black"/>
                <path d="M7.87891 15.7576H18.1213" stroke="black" stroke-width="2" stroke-linecap="round"/>
                <path d="M7.87891 15.7576V15.7576C10.0819 19.8246 15.9184 19.8246 18.1213 15.7576V15.7576"
                      stroke="black" stroke-width="2" stroke-linecap="round"/>
            </svg>
        </button>
    )
}


export default function Page() {
    const [showEmojiDropdown, setShowEmojiDropdown] = useState(false);
    const [addPoll, setNewPoll] = useState(false);

    const handleEmojiClick = () => {
        console.log('Emoji Clicked');

        setShowEmojiDropdown(!showEmojiDropdown);
    };

    const handleEmojiSelection = (selectedEmoji) => {
        // Handle the selected emoji (e.g., update state, form input, etc.)
        console.log('Selected Emoji:', selectedEmoji);
        setShowEmojiDropdown(false);
        setEmoj(selectedEmoji + " ");
    };

    const emojiList = ['😊', '😂', '😍', '🥺', '😎', '🤔', '🚀']; // Add more emojis as needed

    const [statusInput, setStatusInput] = useState('');

    const [title, setTitle] =  useState('Set Your Status');

    const [emoj, setEmoj] =  useState('');

    const savePoll = (status) => {
        setTitle(status);
        setNewPoll(false);
    };

    return (
        <main>
            <Header title="Home"/>
            <div id="home-content">
                <div className="mx-4 py-3 flex gap-2 flex-col text-gray-800">
                    <div className="px-2">
                        <form>

                            <div className="flex justify-between w-full grow">
                                <div className="">{emoj}{title}</div>
                                <button type="button" onClick={() => setNewPoll(true)}>
                                    <EditIcon/>
                                </button>
                            </div>
                            {addPoll && (
                                <div className="">
                                    <div className="flex flex-col gap-2 light-theme-color rounded-lg drop-shadow-lg p-4">
                                        <div className="flex flex-row items-center gap-2">


                                            <label className="mb-1">How are you feeling?
                                                <div
                                                    className="w-full bg-white py-1 pl-4 rounded-md drop-shadow-md flex flex-row gap-2 text-black border-2 border-black">
                                                    <input className="w-4/5 outline-none" type="text"
                                                           placeholder="Set your status . . ." value={statusInput}
                                                           onChange={(e) => setStatusInput(e.target.value)}/>
                                                    <EditIcon/>
                                                    <button type="button" onClick={handleEmojiClick}
                                                            className="focus:outline-none">
                                                        <SmileIcon/>
                                                    </button>
                                                    <div className="p-.5"/>

                                                    {showEmojiDropdown && (
                                                        <div
                                                            className="absolute top-8 right-0 bg-white p-2 rounded-md border border-black">
                                                            {emojiList.map((emoji, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
                                                                    onClick={() => {
                                                                        handleEmojiSelection(emoji);
                                                                        setShowEmojiDropdown(false);
                                                                    }}>
                    {emoji}
                  </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="flex flex-row justify-between pt-2">
                                                    <button
                                                        className="bg-gray-300 px-6 py-2 rounded-lg text-gray-700 shadow-md"
                                                        onClick={() => setNewPoll(false)}>Cancel
                                                    </button>
                                                    <button className="dark-theme-color px-8 py-2 rounded-lg shadow-md"
                                                            onClick={() => savePoll(statusInput)}>Save
                                                    </button>
                                                </div>

                                            </label>


                                        </div>
                                    </div>
                                </div>
                            )}


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
                        </div>
                    </div>
                </div>
            </div>

            <Navigation page='home'/>
        </main>
    )
}



