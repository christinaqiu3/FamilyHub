'use client';
import * as React from 'react'
import Header from '../components/header'
import Navigation from '../components/navigation'
import Switch from '@mui/material/Switch';
import Image from 'next/image'
import TextField from '@mui/material/TextField'
import {createTheme} from '@mui/material/styles'
import "./settings.css"


function GroupSettings() {
    const [isSet, setSet] = React.useState(false) ;
    const [isCreate, setCreate] = React.useState(false)
    const [inputName, setName] = React.useState('')
    
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

    var addedGroup = null;
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
            <div className = 'px-2'>
            <div className = 'bg-white drop-shadow-lg rounded-md'>
                <div className = 'px-2 flex py-2 flex-column rounded-md ml-auto pr-4'
                    onClick = {() => handleExpand()}
                    >
                        <Image src='/group.svg' 
                                    width = {25} 
                                    height = {25}/>
                        <p className = 'px-2'>Current: Mob's Family</p>
                        <Image src='/deflate.svg'
                                    width = {15}
                                    height = {15}
                                style = {{marginLeft: 'auto'}}/>    
                </div>
                <div>
                    <div className = 'flex py-2 flex-column rounded-md ml-auto pl-8'>
                            <Image src='/group.svg' 
                                        width = {20} 
                                        height = {20}/>
                            <p className = 'px-2' style = {{fontSize: 14}}>Body Improvement Club!</p>
                    </div>
                    <div className = 'flex py-2 flex-column rounded-md ml-auto pl-8'>
                            <Image src='/group.svg' 
                                        width = {20} 
                                        height = {20}/>
                            <p className = 'px-2' style = {{fontSize: 14}}>Sus Soccer Students</p>
                    </div>
                    {addedGroup}
                </div>
                <div style = {{display: 'flex',
                                padding: 8}}>
                    <div onClick={() => handleNew()}
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
                    </div>
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
        <div className = 'flex py-2 flex-column hover:bg-gray-200 rounded-md ml-auto pl-4'
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
            <div className = "flex flex-column gap-20 justify-center items-center">
                <p>{label}</p> <Switch color = 'warning'/>                  
            </div>
        </div>
    )
}

function UserPersonalization({color, type, setfunc}) {
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
                        backgroundImage: 'url(/pfp1.svg)'}}>
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

function setColor ({colorString}){
    document.documentElement.style.setProperty('--app-theme-color-med', colorString);
}

function setBorder ({colorString}){
    document.documentElement.style.setProperty('--profile-border-color', colorString);
}

function ColorButton({colorStyle, colorString}) {
    return (
        <button className='color-button' style={colorStyle} onClick={() => setColor({colorString})}></button>
    )
}

function BorderButton({colorStyle, colorString}) {
    return (
        <button className='color-button' style={colorStyle} onClick={() => setBorder({colorString})}></button>
    )
}

export default function SettingsPage() {
    const [colorActive, setColorActive] = React.useState(false);
    const [borderActive, setBorderActive] = React.useState(false);

    return (
        <main>
            <Header title = "Settings"/>
            <div id="content">
                {colorActive && (
                    <div className='bg-blue-400 absolute mt-44 z-20 p-4 ml-4 items-center flex flex-col gap-4'>
                        <div className='flex flex-row justify-between w-full'>
                            <div>Change theme</div>
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
                        <div className='flex flex-row gap-4'>
                            <ColorButton colorStyle={{backgroundColor: '#f00'}} colorString='#f00'/>
                            <ColorButton colorStyle={{backgroundColor: '#0f0'}} colorString='#0f0'/>
                            <ColorButton colorStyle={{backgroundColor: '#00f'}} colorString='#00f'/>
                            <ColorButton colorStyle={{backgroundColor: '#ff0'}} colorString='#ff0'/>
                            <ColorButton colorStyle={{backgroundColor: '#f0f'}} colorString='#f0f'/>
                        </div>
                    </div>
                )}
                {borderActive && (
                    <div className='bg-blue-400 absolute mt-44 z-20 p-4 ml-4 items-center flex flex-col gap-4'>
                        <div className='flex flex-row justify-between w-full'>
                            <div>Change border color</div>
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
                        <div className='flex flex-row gap-4'>
                            <BorderButton colorStyle={{backgroundColor: '#f00'}} colorString='#f00'/>
                            <BorderButton colorStyle={{backgroundColor: '#0f0'}} colorString='#0f0'/>
                            <BorderButton colorStyle={{backgroundColor: '#00f'}} colorString='#00f'/>
                            <BorderButton colorStyle={{backgroundColor: '#ff0'}} colorString='#ff0'/>
                            <BorderButton colorStyle={{backgroundColor: '#f0f'}} colorString='#f0f'/>
                        </div>
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
                        <div>
                            <LabelSwitch label = "Event Notifications"/>
                            <LabelSwitch label = "Poll Notifications"/>
                            <LabelSwitch label = "Chat Notifications" />
                            <LabelSwitch label = "Status Notifications" />
                        </div>
                    </div>
                </div>
                <div style = {{overflow: 'scroll', paddingLeft: 20}}>
                <div className = 'flex py-2 flex-column'>
                    <Image src='/edit.svg' 
                            width = {18} 
                            height = {18}/>
                    <p className = 'px-2'>Personalization</p>
                </div>
                
                <div className = 'overflow-auto whitespace-nowrwap flex flex-row gap-2'>
                        <div className="py-1 rounded-md flex flex-row items-center gap-2 drop-shadow-md">
                            <UserPersonalization color = "black" type = 'Avatar'/>
                            <button onClick={()=> {
                                    setBorderActive(true);
                                    setColorActive(false);
                                }}>
                                <ColorPersonalization color = "var(--profile-border-color)" type = 'Border'/>
                            </button>
                            
                            <button onClick={() => {
                                    setColorActive(true);
                                    setBorderActive(false);
                                }}>
                                <ColorPersonalization color = "var(--app-theme-color-med)" type = "Theme"/>    
                            </button>
                        </div>
                    </div>
                </div>
                <div style = {{paddingLeft: 10}}>
                    <div className = 'flex py-2 flex-column'>
                        <Image src='/sqcode.svg' 
                                width = {24} 
                                height = {28}/>
                        <p className = 'px-2'>Invite a New Member</p>
                    </div>
                    <div>
                        <Image src='/qrcode.png'
                            width = {271}
                            height = {271}
                            style = {{borderColor: "black",
                                        borderWidth: 1.5,
                                        borderRadius: 15,
                                        width: '80%',
                                        height: 'auto',
                                        margin: 5}}/>
                    </div>
                </div>
            </div>         
            <Navigation page = "settings"/>
        </main>
    )
}