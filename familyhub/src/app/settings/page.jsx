'use client';

import * as React from 'react'
import {useContext} from 'react'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Switch from '@mui/material/Switch';
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import {createTheme} from '@mui/material/styles'
import "./settings.css"

import {GroupData, GroupSetterData, GroupSwitcher} from '../providers'


function GroupSettings() {
    let {groupData} = useContext(GroupData)
    let {changeGroup} = useContext(GroupSwitcher)
    const [isSet, setSet] = React.useState(false) ;
    const [isCreate, setCreate] = React.useState(false)
    const [inputName, setName] = React.useState('')
    const [groups, setGroups] = React.useState()
    
    const theme = createTheme({
    })

    function handleExpand() {
        setSet(!isSet)
        setCreate(false)
    }
    function handleNew() {
        setSet(!isSet)
        setCreate(!isCreate)
    }

    function Group({name}) {
        return (
            <div className = 'flex py-2 flex-column rounded-md ml-auto pl-8'>
                <button type = 'button' 
                        className = 'flex flex-column'
                        onClick = {() => changeGroup(name)}>
                    <Image src='/group.svg' 
                                    width = {20} 
                                    height = {20}/>
                        <p className = 'px-2' style = {{fontSize: 14}}>{name}</p>
                </button>
            </div>  
        )
    }
    var addedGroup = null
    if (!(inputName === '')) {
        addedGroup = (<div className = 'flex py-2 flex-column rounded-md ml-auto pl-8'>
                            <Image src='/group.svg' 
                                        width = {20} 
                                        height = {20}/>
                            <p className = 'px-2' style = {{fontSize: 14}}>{inputName}</p>
        </div>)
    }

    if (isSet) {
        return (
            <div className = 'mt-2 px-2 pb-4'>
            <div className = 'bg-white drop-shadow-lg rounded-md'>
                <div className = 'px-2 flex py-2 flex-column rounded-md ml-auto pr-4'
                    onClick = {() => handleExpand()}
                    >
                        <Image src='/group.svg' 
                                    width = {25} 
                                    height = {25}/>
                        <p className = 'px-2'>Current: {groupData.groupName}</p>
                        <Image src='/deflate.svg'
                                    width = {15}
                                    height = {15}
                                style = {{marginLeft: 'auto'}}/>    
                </div>
                    {groupData.groups.map((row, index) => row === groupData.groupName ? null : <Group name = {row}/>)}
                    {addedGroup}
                <div style = {{display: 'flex',
                                padding: 8}}>
                    <button onClick={() => handleNew()}
                            style = {{height: 33, width: 176, 
                                    backgroundColor: 'rgb(253 230 138)',
                                    borderRadius: 15,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 'auto'}}>
                        <p style = {{fontSize: 12}}>Create New Family</p>
                        <Image src ='/group-add.svg'
                                width = {25}
                                height = {25}/>
                    </button>
                </div>
                </div>
            </div>
        )
    } else if (isCreate) {
        return(
        <div className = 'px-2'>
        <div className = 'bg-white drop-shadow-lg rounded-md'>
            <div className = 'px-2 flex py-2 flex-column rounded-md ml-auto pr-4'
                onClick = {() => handleExpand()}
                >
                    <Image src='/back.png'
                                width = {25}
                                height = {15}/>                      
                    <Image src='/group-add.svg' 
                                width = {25} 
                                height = {25}/>
                    <p className = 'px-2'>Creating New Family</p>
            </div>
            <div>
                <div style = {{display: 'flex', flexDirection: 'row',
                                justifyContent: 'center'}}>
                    <TextField id="standard-basic" label="Group Name" variant="standard"
                            onChange={(e) => { 
                                setName(e.target.value); 
                            }}  />
                    <Image src='/edit.svg'
                            width = {18}
                            height = {18}/>
                </div>
            </div>
            <div style = {{display: 'flex',
                                padding: 8}}>
                    <div onClick={() => handleNew()}
                            style = {{height: 33, width: 100, 
                                    backgroundColor: 'rgb(253 230 138)',
                                    borderRadius: 15,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginLeft: 'auto'}}>
                        <p style = {{fontSize: 12}}>Create</p>
                    </div>
                </div>
        </div>
        </div>)
    }
    return(
        <div className = 'flex py-2 flex-column hover:bg-gray-200 rounded-md ml-auto my-2' style = {{paddingLeft: 20, paddingRight: 20}}
                onClick = {() => handleExpand()}>
                        <Image src='/group.svg' 
                                width = {25} 
                                height = {25}/>
                        <p className = 'px-2'>Current: Mob's Family</p>
                        <Image src='/expand-down.svg'
                                width = {20}
                                height = {20}/>
        </div>
    )
}

function LabelSwitch({label}) {
    return (
        <div style = {{display: 'relative'}}>
            <div className = "flex flex-column gap-10 justify-between items-center">
                <p>{label}</p> <Switch color = 'warning'/>                  
            </div>
        </div>
    )
}

function UserPersonalization({color, type, setfunc}) {
    let {groupData} = useContext(GroupData)
    const Userbox = ({}) => (
        <div style = {{display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center'}}>
            <p style = {{fontSize: 13}}>{type}</p>

            <div style = {{width: 94, height: 94, 
                        backgroundColor: color, 
                        borderRadius: '10px',
                        borderColor: "black",
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 3,
                        backgroundImage: `url(${groupData.user.myProfilePhotoURL})`,
                        backgroundSize: 'cover' 
                    }}>
            <Image src = "/edit.svg"
                width = {18}
                height = {18}/>
            </div>
        </div>
        
    );
    return (
        <div style = {{backgroundColor: 'white', 
            width: 130, height: 130, 
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: "black",
            borderWidth: 1.5}}>
            <Userbox/>
        </div>
    )
}

function ColorPersonalization({color, type}) {
    const Colorbox = ({}) => (
        <div style = {{display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center'}}
            >
            <p style = {{fontSize: 13}}>{type}</p>
            <button style = {{width: 94, height: 94, 
                        backgroundColor: color, 
                        borderRadius: '10px',
                        borderColor: "black",
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 3}}
                    >
                <Image src = "/edit.svg"
                    width = {18}
                    height = {18}/>
            </button>
        </div>
        
    );
    return (
        <div style = {{backgroundColor: 'white', 
            width: 130, height: 130, 
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: "black",
            borderWidth: 1.5}}>
            <Colorbox/>
        </div>
    )
}

function setColor ({colorLightString, colorMedString, colorDarkString}){
    // let {groupData} = useContext(GroupData)
    // let {setGroupData} = useContext(GroupSetterData)

    // let temp = groupData
    // temp.user.myAppThemeBaseColor = colorMedString
    // setGroupData(temp)
    document.documentElement.style.setProperty('--app-theme-color-light', colorLightString);
    document.documentElement.style.setProperty('--app-theme-color-med', colorMedString);
    document.documentElement.style.setProperty('--app-theme-color-dark', colorDarkString);
}

function setBorder ({colorString}){
    document.documentElement.style.setProperty('--profile-border-color', colorString);
}

function ColorButton({colorStyle, colorLightString, colorMedString, colorDarkString}) {
    return (
        <button className='color-button drop-shadow-md' style={colorStyle} onClick={() => setColor({colorLightString, colorMedString, colorDarkString})}></button>
    )
}

function BorderButton({colorStyle, colorString}) {
    return (
        <button className='color-button' style={colorStyle} onClick={() => {setBorder({colorString})}}></button>
    )
}

export default function SettingsPage() {
    const [colorActive, setColorActive] = React.useState(false);
    const [borderActive, setBorderActive] = React.useState(false);
    const [avatarActive, setAvatarActive] = React.useState(false);

    const SetBorder = (colorString) => {
        let {groupData} = useContext(GroupData);
        let {setGroupData} = useContext(GroupSetterData);

        let temp = groupData;
        temp.user.myBorderColor = colorString;
        setGroupData(temp);
    }

    return (
        <main>
            <Header title = "Settings"/>
            <div id="content" className="pb-8">
                {colorActive && (
                    <div className='bg-gray-100 rounded-lg drop-shadow-xl absolute mt-44 z-20 p-4 ml-4 items-center flex flex-col gap-4'>
                        <div className='flex flex-row justify-between w-full'>
                            <div>Select Theme Color</div>
                            <button onClick={() => setColorActive(false)}>
                                <svg fill="#000000" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775">
                                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row gap-4'>
                                <ColorButton colorStyle={{backgroundColor: '#FEE68A'}} 
                                    colorLightString='#fef3c7' 
                                    colorMedString='#FEE68A' 
                                    colorDarkString='#f59e0c'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#f8ac6e'}} 
                                    colorLightString='#ffd4b1' 
                                    colorMedString='#f8ac6e' 
                                    colorDarkString='#fd6c18'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#f26582'}} 
                                    colorLightString='#ffa7b9' 
                                    colorMedString='#f26582' 
                                    colorDarkString='#ff1848'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#e75ca9'}} 
                                    colorLightString='#ffa4d7' 
                                    colorMedString='#e75ca9' 
                                    colorDarkString='#f51691'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#c966e7'}} 
                                    colorLightString='#e99fff' 
                                    colorMedString='#c966e7' 
                                    colorDarkString='#c317f7'
                                />
                            </div>
                            <div className='flex flex-row gap-4'>
                                <ColorButton colorStyle={{backgroundColor: '#a271f0'}} 
                                    colorLightString='#FEE68A' 
                                    colorMedString='#FEE68A' 
                                    colorDarkString='#FEE68A'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#71abf0'}} 
                                    colorLightString='#c8a6ff' 
                                    colorMedString='#71abf0' 
                                    colorDarkString='#8135fb'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#71d2f0'}} 
                                    colorLightString='#96ddff' 
                                    colorMedString='#71d2f0' 
                                    colorDarkString='#03adfe'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#63dab2'}} 
                                    colorLightString='#99f7d7' 
                                    colorMedString='#63dab2' 
                                    colorDarkString='#0fcf8e'
                                />
                                <ColorButton colorStyle={{backgroundColor: '#bdea75'}} 
                                    colorLightString='#d0f792' 
                                    colorMedString='#bdea75' 
                                    colorDarkString='#8ae000'
                                />
                            </div>
                        </div>
                        
                    </div>
                )}
                {borderActive && (
                    <div className='bg-gray-100 rounded-lg drop-shadow-xl absolute mt-44 z-20 p-4 ml-4 items-center flex flex-col gap-4'>
                        <div className='flex flex-row justify-between w-full'>
                            <div>Select Border Color</div>
                            <button onClick={() => setBorderActive(false)}>
                                <svg fill="#000000" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775">
                                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                                </svg>
                            </button>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-row gap-4'>
                                <BorderButton colorStyle={{backgroundColor: '#FEE68A'}} colorString='#FEE68A'/>
                                <BorderButton colorStyle={{backgroundColor: '#f8ac6e'}} colorString='#f8ac6e'/>
                                <BorderButton colorStyle={{backgroundColor: '#f26582'}} colorString='#f26582'/>
                                <BorderButton colorStyle={{backgroundColor: '#e75ca9'}} colorString='#e75ca9'/>
                                <BorderButton colorStyle={{backgroundColor: '#c966e7'}} colorString='#c966e7'/>
                            </div>
                            <div className='flex flex-row gap-4'>
                                <BorderButton colorStyle={{backgroundColor: '#a271f0'}} colorString='#a271f0'/>
                                <BorderButton colorStyle={{backgroundColor: '#71abf0'}} colorString='#71abf0'/>
                                <BorderButton colorStyle={{backgroundColor: '#71d2f0'}} colorString='#71d2f0'/>
                                <BorderButton colorStyle={{backgroundColor: '#63dab2'}} colorString='#63dab2'/>
                                <BorderButton colorStyle={{backgroundColor: '#bdea75'}} colorString='#bdea75'/>
                            </div>
                        </div>
                        
                    </div>
                )}
                {avatarActive && (
                    <div className='bg-blue-400 absolute mt-44 z-20 p-4 ml-4 items-center flex flex-col gap-4'>
                        <div className='flex flex-row justify-between w-full'>
                            <div>Change icon</div>
                            <button onClick={() => setAvatarActive(false)}>
                                <svg fill="#000000" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775">
                                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                        c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                        c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                        c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                        l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                        c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                                </svg>
                            </button>
                        </div>
                        <input
                            type="file"
                            name="myImage"
                            onChange={(event) => {
                                console.log(event.target.files[0]);
                                document.documentElement.style.setProperty('--profile-icon', event.target.files[0]);
                            }}
                        />
                    </div>
                )}
                {(avatarActive || colorActive || borderActive) && (
                    <div className="absolute w-full bg-gray-900" style={{
                        height: 602,
                        width: 376,
                        zIndex: 15,
                        opacity: .2
                    }}>
                        
                    </div>
                )}
                <GroupSettings/>
                <div style = {{paddingLeft: 20, paddingRight: 20}}>
                    <div>
                        <div className='flex flex-column px-1'>
                            <Image src='/bell.svg'
                                    width = {18}
                                    height = {18}/>
                            <p className = 'px-2'>Notifications</p>
                        </div>
                        <div className='pl-4'>
                            <LabelSwitch label = "Event Notifications"/>
                            <LabelSwitch label = "Poll Notifications"/>
                            <LabelSwitch label = "Chat Notifications" />
                            <LabelSwitch label = "Status Notifications" />
                        </div>
                    </div>
                </div>
                <div style = {{overflow: 'scroll', paddingLeft: 20, paddingRight: 20}}>
                <div className = 'flex py-2 flex-column'>
                    <Image src='/edit.svg' 
                            width = {18} 
                            height = {18}/>
                    <p className = 'px-2'>Personalization</p>
                </div>
                
                <div className = 'overflow-auto whitespace-nowrwap flex flex-row gap-2'>
                        <div className="py-1 rounded-md flex flex-row items-center gap-2 drop-shadow-md">
                            <button onClick={() => {
                                    setBorderActive(false);
                                    setColorActive(false);
                                    setAvatarActive(true);
                                }}>
                                <UserPersonalization color = "black" type = 'Avatar'/>
                            </button>
                            <button onClick={()=> {
                                    setBorderActive(true);
                                    setColorActive(false);
                                    setAvatarActive(false);
                                }}>
                                <ColorPersonalization color = "var(--profile-border-color)" type = 'Border'/>
                            </button>
                            
                            <button onClick={() => {
                                    setColorActive(true);
                                    setBorderActive(false);
                                    setAvatarActive(false);
                                }}>
                                <ColorPersonalization color = "var(--app-theme-color-med)" type = "Theme"/>    
                            </button>
                        </div>
                    </div>
                </div>
                <div style = {{paddingLeft: 20}}>
                    <div className = 'flex py-2 flex-column'>
                        <Image src='/sqcode.svg' 
                                width = {24} 
                                height = {28}/>
                        <p className = 'px-4'>Invite a New Member</p>
                    </div>
                    <div className="">
                        <div className="flex flex-row gap-3">
                            <Image src='https://i.imgur.com/y8oh87T.png'
                                width = {271}
                                height = {271}
                                style = {{borderColor: "black",
                                            borderWidth: 1.5,
                                            borderRadius: 15,
                                            width: '75%',
                                            height: 'auto',
                                            padding: 20,
                                            margin: 2}}/>
                            <div className="flex flex-col gap-2">
                                <button className="p-3 border border-black rounded-full hover:bg-gray-200">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.004 7.4736C12.3999 7.08857 12.4087 6.45546 12.0237 6.05953C11.6387 5.66359 11.0056 5.65476 10.6096 6.03979L12.004 7.4736ZM5.99602 10.5264C5.60009 10.9114 5.59125 11.5445 5.97629 11.9405C6.36133 12.3364 6.99443 12.3452 7.39036 11.9602L5.99602 10.5264ZM15.7603 8.03401L15.0632 7.31711V7.31711L15.7603 8.03401ZM12.9164 9.40475C12.5205 9.78978 12.5117 10.4229 12.8967 10.8188C13.2817 11.2148 13.9148 11.2236 14.3108 10.8386L12.9164 9.40475ZM7.14943 3.79649C6.75349 4.18153 6.74466 4.81463 7.12969 5.21057C7.51473 5.6065 8.14783 5.61534 8.54377 5.2303L7.14943 3.79649ZM10.3135 2.11443L9.61631 1.39752V1.39752L10.3135 2.11443ZM2.23965 9.96599L1.54248 9.24908L2.23965 9.96599ZM5.08356 8.59525C5.4795 8.21022 5.48833 7.57711 5.10329 7.18118C4.71826 6.78524 4.08516 6.77641 3.68922 7.16144L5.08356 8.59525ZM10.8506 14.2035C11.2465 13.8185 11.2553 13.1854 10.8703 12.7894C10.4853 12.3935 9.85217 12.3847 9.45623 12.7697L10.8506 14.2035ZM7.68653 15.8856L6.98936 15.1687H6.98936L7.68653 15.8856ZM2.23966 15.8856L1.54249 16.6025H1.54249L2.23966 15.8856ZM15.7603 2.11443L15.0632 2.83133V2.83133L15.7603 2.11443ZM10.6096 6.03979L5.99602 10.5264L7.39036 11.9602L12.004 7.4736L10.6096 6.03979ZM15.0632 7.31711L12.9164 9.40475L14.3108 10.8386L16.4575 8.75092L15.0632 7.31711ZM8.54377 5.2303L11.0106 2.83133L9.61631 1.39752L7.14943 3.79649L8.54377 5.2303ZM2.93682 10.6829L5.08356 8.59525L3.68922 7.16144L1.54248 9.24908L2.93682 10.6829ZM9.45623 12.7697L6.98936 15.1687L8.3837 16.6025L10.8506 14.2035L9.45623 12.7697ZM2.93683 15.1687C1.68773 13.954 1.68772 11.8976 2.93682 10.6829L1.54248 9.24908C-0.514162 11.2491 -0.514161 14.6024 1.54249 16.6025L2.93683 15.1687ZM1.54249 16.6025C3.4586 18.4658 6.46759 18.4658 8.3837 16.6025L6.98936 15.1687C5.84953 16.2771 4.07665 16.2771 2.93683 15.1687L1.54249 16.6025ZM15.0632 2.83133C16.3123 4.04605 16.3123 6.10239 15.0632 7.31711L16.4575 8.75092C18.5142 6.75089 18.5142 3.39755 16.4575 1.39752L15.0632 2.83133ZM16.4575 1.39752C14.5414 -0.46584 11.5324 -0.465841 9.61631 1.39752L11.0106 2.83133C12.1505 1.72289 13.9234 1.72289 15.0632 2.83133L16.4575 1.39752Z" fill="#33363F"/>
                                    </svg>
                                </button>
                                <button className="p-3 border border-black rounded-full hover:bg-gray-200">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.25174 9.07828L3.883 8.2887C1.40258 7.46189 0.162354 7.04848 0.162354 6.28876C0.162354 5.52903 1.40257 5.11562 3.88301 4.28881L12.8564 1.29768C14.6017 0.715908 15.4744 0.425024 15.935 0.885666C16.3957 1.34631 16.1048 2.21896 15.523 3.96427L12.5319 12.9377C11.7051 15.4181 11.2916 16.6583 10.5319 16.6583C9.7722 16.6583 9.35879 15.4181 8.53198 12.9377L7.7424 10.5689L12.3313 5.98003C12.743 5.56839 12.743 4.901 12.3313 4.48936C11.9197 4.07772 11.2523 4.07772 10.8407 4.48936L6.25174 9.07828Z" fill="#222222"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>         
            <Navigation page = "settings"/>
        </main>
    )
}