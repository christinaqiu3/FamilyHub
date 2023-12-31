"use client";

import Navigation from '../components/navigation'
import Header from '../components/header'
import '../globals.css'
import React, {useState, useContext} from 'react'

import {GroupData, GroupSetterData} from '../providers'

import './checkin.css'

function UserProfile({picture, color, status, emoji}) {
    return (
        <div className="flex flex-col gap-1 items-center">
            <img
                src={picture}
                alt=""
                style={{
                    width: 75, 
                    height: 75, 
                    borderRadius: 100, 
                    border: `4px solid ${color}`
                }}
            />
            <div style={{}} className="border-2 text-center border-slate-950 rounded-md w-20">{emoji + " " + status}</div>
        </div>
    )
}

function EditIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-outside-1_92_1245" maskUnits="userSpaceOnUse" x="-0.00292969" y="0.920166" width="24" height="24" fill="black">
                                <rect fill="white" x="-0.00292969" y="0.920166" width="24" height="24"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73576 5.57832L10.5083 4.81182C11.1751 4.15033 11.1751 3.07227 10.5083 2.41078C9.849 1.75663 8.7855 1.75663 8.12617 2.41078L7.31838 3.21222C7.8819 4.20939 8.71895 5.03231 9.73576 5.57832ZM5.8598 4.65933L2.37714 8.11462C1.94856 8.53983 1.73428 8.75243 1.59324 9.01423C1.45221 9.27604 1.39256 9.57194 1.27326 10.1637L1.06156 11.2139C0.99453 11.5464 0.961016 11.7127 1.05548 11.8074C1.14995 11.9022 1.3163 11.8692 1.64902 11.8032L2.73201 11.5883C3.31909 11.4718 3.61263 11.4135 3.87301 11.2751C4.13339 11.1367 4.34584 10.9259 4.77072 10.5043L8.26795 7.03459C7.3045 6.42014 6.48432 5.60927 5.8598 4.65933Z"/>
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73576 5.57832L10.5083 4.81182C11.1751 4.15033 11.1751 3.07227 10.5083 2.41078C9.849 1.75663 8.7855 1.75663 8.12617 2.41078L7.31838 3.21222C7.8819 4.20939 8.71895 5.03231 9.73576 5.57832ZM5.8598 4.65933L2.37714 8.11462C1.94856 8.53983 1.73428 8.75243 1.59324 9.01423C1.45221 9.27604 1.39256 9.57194 1.27326 10.1637L1.06156 11.2139C0.99453 11.5464 0.961016 11.7127 1.05548 11.8074C1.14995 11.9022 1.3163 11.8692 1.64902 11.8032L2.73201 11.5883C3.31909 11.4718 3.61263 11.4135 3.87301 11.2751C4.13339 11.1367 4.34584 10.9259 4.77072 10.5043L8.26795 7.03459C7.3045 6.42014 6.48432 5.60927 5.8598 4.65933Z" fill="none"/>
                                <path d="M9.73576 5.57832L9.26267 6.45934L9.9147 6.80946L10.4401 6.28821L9.73576 5.57832ZM10.5083 4.81182L9.80402 4.10193V4.10193L10.5083 4.81182ZM10.5083 2.41078L11.2126 1.70089V1.70089L10.5083 2.41078ZM8.12617 2.41078L8.83048 3.12067L8.12617 2.41078ZM7.31838 3.21222L6.61407 2.50233L6.07231 3.03982L6.44778 3.70422L7.31838 3.21222ZM5.8598 4.65933L6.6954 4.10999L6.02361 3.08814L5.15549 3.94944L5.8598 4.65933ZM2.37714 8.11462L3.08145 8.82451L3.08145 8.82451L2.37714 8.11462ZM1.59324 9.01423L0.712862 8.53996L0.712862 8.53997L1.59324 9.01423ZM1.27326 10.1637L0.292978 9.96614L0.292978 9.96614L1.27326 10.1637ZM1.06156 11.2139L2.04184 11.4115V11.4115L1.06156 11.2139ZM1.05548 11.8074L0.347301 12.5135L0.347304 12.5135L1.05548 11.8074ZM1.64902 11.8032L1.45438 10.8223H1.45438L1.64902 11.8032ZM2.73201 11.5883L2.92665 12.5691H2.92665L2.73201 11.5883ZM3.87301 11.2751L4.34246 12.1581H4.34246L3.87301 11.2751ZM4.77072 10.5043L5.47504 11.2142L4.77072 10.5043ZM8.26795 7.03459L8.97227 7.74448L9.85992 6.86381L8.80566 6.19146L8.26795 7.03459ZM10.4401 6.28821L11.2126 5.52171L9.80402 4.10193L9.03145 4.86843L10.4401 6.28821ZM11.2126 5.52171C12.2736 4.46907 12.2736 2.75353 11.2126 1.70089L9.80402 3.12067C10.0765 3.39101 10.0765 3.83159 9.80402 4.10193L11.2126 5.52171ZM11.2126 1.70089C10.1634 0.659927 8.47107 0.659925 7.42186 1.70089L8.83048 3.12067C9.09993 2.85333 9.53457 2.85333 9.80402 3.12067L11.2126 1.70089ZM7.42186 1.70089L6.61407 2.50233L8.02269 3.92211L8.83048 3.12067L7.42186 1.70089ZM6.44778 3.70422C7.10392 4.86526 8.07845 5.82343 9.26267 6.45934L10.2088 4.6973C9.35945 4.24119 8.65989 3.55352 8.18897 2.72022L6.44778 3.70422ZM5.15549 3.94944L1.67282 7.40473L3.08145 8.82451L6.56412 5.36922L5.15549 3.94944ZM1.67283 7.40473C1.28583 7.78868 0.94063 8.11716 0.712862 8.53996L2.47362 9.4885C2.52793 9.3877 2.61129 9.29097 3.08145 8.82451L1.67283 7.40473ZM0.712862 8.53997C0.485094 8.96277 0.400703 9.43175 0.292978 9.96614L2.25354 10.3614C2.38441 9.71213 2.41932 9.5893 2.47362 9.4885L0.712862 8.53997ZM0.292978 9.96614L0.0812786 11.0163L2.04184 11.4115L2.25354 10.3614L0.292978 9.96614ZM0.0812787 11.0163C0.0542806 11.1502 0.00902617 11.3614 -0.000685215 11.5478C-0.0114224 11.7538 0.00499105 12.1701 0.347301 12.5135L1.76366 11.1014C1.87482 11.2129 1.94144 11.344 1.97339 11.4638C2.0011 11.5678 1.99712 11.642 1.9966 11.6519C1.996 11.6634 1.99572 11.6541 2.00428 11.6048C2.0126 11.557 2.02429 11.4986 2.04184 11.4115L0.0812787 11.0163ZM0.347304 12.5135C0.689615 12.8568 1.10585 12.8745 1.31192 12.8644C1.4983 12.8552 1.70964 12.8106 1.84365 12.784L1.45438 10.8223C1.36725 10.8396 1.30885 10.8511 1.26097 10.8593C1.2117 10.8677 1.20235 10.8674 1.21389 10.8668C1.22378 10.8663 1.29804 10.8626 1.40187 10.8906C1.52158 10.9229 1.6525 10.9899 1.76366 11.1014L0.347304 12.5135ZM1.84365 12.784L2.92665 12.5691L2.53738 10.6074L1.45438 10.8223L1.84365 12.784ZM2.92665 12.5691C3.4568 12.464 3.92196 12.3816 4.34246 12.1581L3.40356 10.3921C3.3033 10.4454 3.18138 10.4796 2.53738 10.6074L2.92665 12.5691ZM4.34246 12.1581C4.76296 11.9345 5.09135 11.5949 5.47504 11.2142L4.06641 9.79444C3.60033 10.2569 3.50382 10.3388 3.40356 10.3921L4.34246 12.1581ZM5.47504 11.2142L8.97227 7.74448L7.56364 6.3247L4.06641 9.79444L5.47504 11.2142ZM8.80566 6.19146C7.96151 5.6531 7.24271 4.94249 6.6954 4.10999L5.02421 5.20867C5.72593 6.27605 6.64748 7.18719 7.73025 7.87772L8.80566 6.19146Z" fill="black" mask="url(#path-1-outside-1_92_1245)"/>
                            </svg> 
    )
}

function Poll({question, options, userData, userVote}) {
    let {groupData} = useContext(GroupData)
    let {setGroupData} = useContext(GroupSetterData)
    
    const [optionTitles, setOptionTitles] = useState(Object.keys(options));
    let initialSelectedOption = ""
    if (optionTitles.find((x) => x === userVote) !== undefined) {
        initialSelectedOption = userVote
    }
    const [selectedOption, setSelectedOption] = useState(initialSelectedOption) ;
    let voteSum = 0
    for (let votes in options) {
        voteSum = voteSum + votes
    }
    const [numVotes, setNumVotes] = useState(voteSum)

    const handleSelection = (option, title) => {
        let temp = groupData
        for (let poll in temp.checkin.polls) {
            if (temp.checkin.polls[poll].title === title) {
                temp.checkin.polls[poll].userVote = option
                break
            }
        }
        setGroupData(temp)
        setSelectedOption(option)
    }

    function Option({optionTitle, parentQuestion}) {
        if (selectedOption === optionTitle) {
            return (
                <button type='button' className="w-full dark-theme-color px-4 py-1 rounded-full drop-shadow-md text-gray-900 text-left flex flex-row justify-between"
                onClick={() => handleSelection("", parentQuestion)}>
                    {optionTitle}
                    <div className="">100%</div>
                </button>
            )
        } else {
            return (
                <button className="w-full bg-white px-4 py-1 rounded-full drop-shadow-md text-gray-500 text-left" 
                onClick= {() => handleSelection(optionTitle, parentQuestion)}>
                {optionTitle}
                </button>
            )
        }
        
    }
    return(
        <div className="flex flex-col gap-2 light-theme-color rounded-lg drop-shadow-lg p-4">
            <div className="flex flex-row items-center gap-2">
                <img
                    src={userData.memberProfilePhotoURL}
                    alt=""
                    style={{
                        width: 40, 
                        height: 40, 
                        borderRadius: 100, 
                        border: `3px solid ${userData.memberBorderColor}`
                    }}
                />
                <div className="text-sm">{question}</div>
            </div>
            {optionTitles.map((elem, index) => <Option key = {index} 
                                                        optionTitle = {elem}
                                                        parentQuestion={question}/>)}
        </div>
    )
}

export default function Page() {
    let {groupData} = useContext(GroupData)
    let {setGroupData} = useContext(GroupSetterData)
    const [addPoll, setNewPoll] = useState(false);
    const [pollList, setPollList] = useState([]);
    const [question,setQuestion] = useState("");
    const [option1,setOption1] = useState("");
    const [option2,setOption2] = useState("");

    const userList = [
        <UserProfile picture="https://i.imgur.com/Bwqg0fu.png" style={{width: 75, height: 75, borderRadius: 100, border: '4px solid #a8783e'}} status="hi"/>,
        <UserProfile picture="https://i.imgur.com/pwQSdII.png" style={{width: 75, height: 75, borderRadius: 100, border: '4px solid #ad4eeb'}} status="hi"/>,
        <UserProfile picture="https://acnhcdn.com/latest/NpcBromide/NpcNmlOcp01.png" style={{width: 75, height: 75, borderRadius: 100, border: '4px solid #ff9ccb'}} status="hi"/>,
        <UserProfile picture="https://pbs.twimg.com/profile_images/1298543441589276672/J-7vMCTE_400x400.png" style={{width: 75, height: 75, borderRadius: 100, border: '4px solid #5d70e0'}} status="hi"/>,
        <UserProfile picture="https://i.imgur.com/HTYMTkd.png" style={{width: 75, height: 75, borderRadius: 100, border: '4px solid #e05f5d'}} status="hi"/>,
        <UserProfile picture="https://i.imgur.com/bfMRBp2.png" style={{width: 75, height: 75, borderRadius: 100, border: '4px solid #c5e05d'}} status="hi"/>,
    ]

    const InputPoll = () => {
        let optionsJsonString = `{"${option1}" : 0, "${option2}" : 0}`
        let userDataJsonString = `{"owner": "${groupData.user.myName}",
                               "memberProfilePhotoURL": "${groupData.user.myProfilePhotoURL}",
                               "memberBorderColor": "${groupData.user.myBorderColor}"}`
        return <Poll 
                    question={question}
                    options = {JSON.parse(optionsJsonString)}
                    userData = {JSON.parse(userDataJsonString)}
                />
    }

    const questionChangeHandler = (e) => {
        setQuestion(e.target.value)
    };

    const option1ChangeHandler = (e) => {
        setOption1(e.target.value)
    };

    const option2ChangeHandler = (e) => {
        setOption2(e.target.value)
    };

    function savePoll() {
        let newPollJsonString = `{"title": "${question}",
                                  "options": {"${option1}": 0, "${option2}": 0},
                                  "userData": {"owner": "${groupData.user.myName}",
                                               "memberProfilePhotoURL": "${groupData.user.myProfilePhotoURL}",
                                               "memberBorderColor": "${groupData.user.myBorderColor}"},
                                  "voters": [],
                                  "userVote": ""
                                  }`
        // save to global JSON data
        let temp = groupData
        temp.checkin.polls.push(JSON.parse(newPollJsonString))

        // append to polls
        setPollList(pollList.concat(<InputPoll key={pollList.length} />));
        setQuestion("");
        setOption1("");
        setOption2("");
        setNewPoll(false);
    }

    return (
        <main>
            <Header title = "Check-in"/>
            <div id="content" className="pt-4">
                <div className="mx-4 pb-4 flex gap-4 flex-col text-gray-800">
                    <div className="overflow-auto whitespace-nowrap flex flex-row gap-2">
                        {groupData.members.map((row, index) => (
                            <UserProfile key={index}
                                picture = {row.memberProfilePhotoURL}
                                color = {row.memberBorderColor}
                                status = {row.memberStatus.message}
                                emoji = {row.memberStatus.emoji}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between w-full grow">
                        <div class="">Polls</div>
                        <button onClick={() => setNewPoll(true)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 11.5C23 17.2593 18.1157 22 12 22C5.88433 22 1 17.2593 1 11.5C1 5.74069 5.88433 1 12 1C18.1157 1 23 5.74069 23 11.5Z" fill="white" stroke="black" stroke-width="2"/>
                                <path d="M23 11.5C23 17.2593 18.1157 22 12 22C5.88433 22 1 17.2593 1 11.5C1 5.74069 5.88433 1 12 1C18.1157 1 23 5.74069 23 11.5Z" fill="white" stroke="black" stroke-width="2"/>
                                <rect x="11.2002" y="5.3667" width="1.6" height="12.2667" fill="black"/>
                                <rect x="5.6001" y="10.7334" width="12.8" height="1.53333" fill="black"/>
                            </svg>
                        </button>
                    </div>
                    {addPoll && (
                        <div> 
                            <div className="flex flex-col gap-2 light-theme-color rounded-lg drop-shadow-lg p-4">
                                <div className="flex flex-row items-center gap-2">
                                    <img
                                        src={groupData.user.myProfilePhotoURL}
                                        alt=""
                                        className=""
                                        style={{
                                            width: 40, 
                                            height: 40, 
                                            borderRadius: 100, 
                                            border: `3px solid ${groupData.user.myBorderColor}`
                                        }}
                                    />
                                    <svg width="26" height="26" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="path-1-outside-1_92_1245" maskUnits="userSpaceOnUse" x="-0.00292969" y="0.920166" width="24" height="24" fill="black">
                                        <rect fill="white" x="-0.00292969" y="0.920166" width="26" height="24"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73576 5.57832L10.5083 4.81182C11.1751 4.15033 11.1751 3.07227 10.5083 2.41078C9.849 1.75663 8.7855 1.75663 8.12617 2.41078L7.31838 3.21222C7.8819 4.20939 8.71895 5.03231 9.73576 5.57832ZM5.8598 4.65933L2.37714 8.11462C1.94856 8.53983 1.73428 8.75243 1.59324 9.01423C1.45221 9.27604 1.39256 9.57194 1.27326 10.1637L1.06156 11.2139C0.99453 11.5464 0.961016 11.7127 1.05548 11.8074C1.14995 11.9022 1.3163 11.8692 1.64902 11.8032L2.73201 11.5883C3.31909 11.4718 3.61263 11.4135 3.87301 11.2751C4.13339 11.1367 4.34584 10.9259 4.77072 10.5043L8.26795 7.03459C7.3045 6.42014 6.48432 5.60927 5.8598 4.65933Z"/>
                                        </mask>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.73576 5.57832L10.5083 4.81182C11.1751 4.15033 11.1751 3.07227 10.5083 2.41078C9.849 1.75663 8.7855 1.75663 8.12617 2.41078L7.31838 3.21222C7.8819 4.20939 8.71895 5.03231 9.73576 5.57832ZM5.8598 4.65933L2.37714 8.11462C1.94856 8.53983 1.73428 8.75243 1.59324 9.01423C1.45221 9.27604 1.39256 9.57194 1.27326 10.1637L1.06156 11.2139C0.99453 11.5464 0.961016 11.7127 1.05548 11.8074C1.14995 11.9022 1.3163 11.8692 1.64902 11.8032L2.73201 11.5883C3.31909 11.4718 3.61263 11.4135 3.87301 11.2751C4.13339 11.1367 4.34584 10.9259 4.77072 10.5043L8.26795 7.03459C7.3045 6.42014 6.48432 5.60927 5.8598 4.65933Z" fill="none"/>
                                        <path d="M9.73576 5.57832L9.26267 6.45934L9.9147 6.80946L10.4401 6.28821L9.73576 5.57832ZM10.5083 4.81182L9.80402 4.10193V4.10193L10.5083 4.81182ZM10.5083 2.41078L11.2126 1.70089V1.70089L10.5083 2.41078ZM8.12617 2.41078L8.83048 3.12067L8.12617 2.41078ZM7.31838 3.21222L6.61407 2.50233L6.07231 3.03982L6.44778 3.70422L7.31838 3.21222ZM5.8598 4.65933L6.6954 4.10999L6.02361 3.08814L5.15549 3.94944L5.8598 4.65933ZM2.37714 8.11462L3.08145 8.82451L3.08145 8.82451L2.37714 8.11462ZM1.59324 9.01423L0.712862 8.53996L0.712862 8.53997L1.59324 9.01423ZM1.27326 10.1637L0.292978 9.96614L0.292978 9.96614L1.27326 10.1637ZM1.06156 11.2139L2.04184 11.4115V11.4115L1.06156 11.2139ZM1.05548 11.8074L0.347301 12.5135L0.347304 12.5135L1.05548 11.8074ZM1.64902 11.8032L1.45438 10.8223H1.45438L1.64902 11.8032ZM2.73201 11.5883L2.92665 12.5691H2.92665L2.73201 11.5883ZM3.87301 11.2751L4.34246 12.1581H4.34246L3.87301 11.2751ZM4.77072 10.5043L5.47504 11.2142L4.77072 10.5043ZM8.26795 7.03459L8.97227 7.74448L9.85992 6.86381L8.80566 6.19146L8.26795 7.03459ZM10.4401 6.28821L11.2126 5.52171L9.80402 4.10193L9.03145 4.86843L10.4401 6.28821ZM11.2126 5.52171C12.2736 4.46907 12.2736 2.75353 11.2126 1.70089L9.80402 3.12067C10.0765 3.39101 10.0765 3.83159 9.80402 4.10193L11.2126 5.52171ZM11.2126 1.70089C10.1634 0.659927 8.47107 0.659925 7.42186 1.70089L8.83048 3.12067C9.09993 2.85333 9.53457 2.85333 9.80402 3.12067L11.2126 1.70089ZM7.42186 1.70089L6.61407 2.50233L8.02269 3.92211L8.83048 3.12067L7.42186 1.70089ZM6.44778 3.70422C7.10392 4.86526 8.07845 5.82343 9.26267 6.45934L10.2088 4.6973C9.35945 4.24119 8.65989 3.55352 8.18897 2.72022L6.44778 3.70422ZM5.15549 3.94944L1.67282 7.40473L3.08145 8.82451L6.56412 5.36922L5.15549 3.94944ZM1.67283 7.40473C1.28583 7.78868 0.94063 8.11716 0.712862 8.53996L2.47362 9.4885C2.52793 9.3877 2.61129 9.29097 3.08145 8.82451L1.67283 7.40473ZM0.712862 8.53997C0.485094 8.96277 0.400703 9.43175 0.292978 9.96614L2.25354 10.3614C2.38441 9.71213 2.41932 9.5893 2.47362 9.4885L0.712862 8.53997ZM0.292978 9.96614L0.0812786 11.0163L2.04184 11.4115L2.25354 10.3614L0.292978 9.96614ZM0.0812787 11.0163C0.0542806 11.1502 0.00902617 11.3614 -0.000685215 11.5478C-0.0114224 11.7538 0.00499105 12.1701 0.347301 12.5135L1.76366 11.1014C1.87482 11.2129 1.94144 11.344 1.97339 11.4638C2.0011 11.5678 1.99712 11.642 1.9966 11.6519C1.996 11.6634 1.99572 11.6541 2.00428 11.6048C2.0126 11.557 2.02429 11.4986 2.04184 11.4115L0.0812787 11.0163ZM0.347304 12.5135C0.689615 12.8568 1.10585 12.8745 1.31192 12.8644C1.4983 12.8552 1.70964 12.8106 1.84365 12.784L1.45438 10.8223C1.36725 10.8396 1.30885 10.8511 1.26097 10.8593C1.2117 10.8677 1.20235 10.8674 1.21389 10.8668C1.22378 10.8663 1.29804 10.8626 1.40187 10.8906C1.52158 10.9229 1.6525 10.9899 1.76366 11.1014L0.347304 12.5135ZM1.84365 12.784L2.92665 12.5691L2.53738 10.6074L1.45438 10.8223L1.84365 12.784ZM2.92665 12.5691C3.4568 12.464 3.92196 12.3816 4.34246 12.1581L3.40356 10.3921C3.3033 10.4454 3.18138 10.4796 2.53738 10.6074L2.92665 12.5691ZM4.34246 12.1581C4.76296 11.9345 5.09135 11.5949 5.47504 11.2142L4.06641 9.79444C3.60033 10.2569 3.50382 10.3388 3.40356 10.3921L4.34246 12.1581ZM5.47504 11.2142L8.97227 7.74448L7.56364 6.3247L4.06641 9.79444L5.47504 11.2142ZM8.80566 6.19146C7.96151 5.6531 7.24271 4.94249 6.6954 4.10999L5.02421 5.20867C5.72593 6.27605 6.64748 7.18719 7.73025 7.87772L8.80566 6.19146Z" fill="black" mask="url(#path-1-outside-1_92_1245)"/>
                                    </svg> 
                                    <input className="py-1 w-full rounded-lg light-theme-color text-sm" type="text" placeholder="Set your prompt..." onChange={questionChangeHandler} value={question}/>
                                </div>
                                <div className="w-full bg-white py-1 pl-4 rounded-full drop-shadow-md flex flex-row gap-2 text-black border-2 border-black">
                                    <EditIcon/>
                                    <input className="w-4/5" type="text" placeholder="Insert item..." onChange={option1ChangeHandler} value={option1}/>
                                </div>
                                <div className="w-full bg-white py-1 pl-4 rounded-full drop-shadow-md flex flex-row gap-2 text-black border-2 border-black">
                                    <EditIcon/>
                                    <input className="w-4/5" type="text" placeholder="Insert item..." onChange={option2ChangeHandler} value={option2}/>
                                </div>
                                <div className="flex flex-row justify-between pt-2">
                                    <button class="bg-gray-300 px-6 py-2 rounded-lg text-gray-700 shadow-md" onClick={() => setNewPoll(false)}>Cancel</button>
                                    <button class="dark-theme-color px-8 py-2 rounded-lg shadow-md" onClick={savePoll}>Save</button>
                                </div>
                            </div>
                        </div>  
                    )}
                    <div class="flex flex-col-reverse gap-4 grow">
                        {pollList}
                        {groupData.checkin.polls.map((row, index) => <Poll key = {index} 
                                                                            userData = {row.userData}
                                                                            question = {row.title}
                                                                            options = {row.options}
                                                                            voters = {row.voters}
                                                                            userVote = {row.userVote}/>)}
                    </div>
                </div>
            </div>

            <Navigation page = 'checkin'/>
        </main>
    )
}