import Header from '../components/header'
import Navigation from '../components/navigation'
import Switch from '@mui/material/Switch';
import Image from 'next/image'

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

function ColorPersonalization({color, type, setfunc}) {
    const Colorbox = ({}) => (
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
                        padding: 3}}>
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
            <Colorbox/>
        </div>
    )
}

export default function SettingsPage() {
    return (
        <main style = {{
            color: 'black',
            height: '100%'
        }}>
            <Header title = "Settings"/>
            <div style = {{overflow: 'scroll', maxHeight: '80%'}}>
                <div style = {{paddingLeft: 10}}>
                    <div className = 'flex py-2 flex-column hover:bg-gray-200 rounded-md ml-auto pr-4'>
                        <Image src='/group.svg' 
                                width = {25} 
                                height = {25}/>
                        <p className = 'px-2'>Current: Mob's Family</p>
                        <Image src='/expand-down.svg'
                                width = {20}
                                height = {20}/>
                    </div>
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
                <div style = {{overflow: 'scroll', paddingLeft: 10}}>
                <div className = 'flex py-2 flex-column'>
                    <Image src='/edit.svg' 
                            width = {18} 
                            height = {18}/>
                    <p className = 'px-2'>Personalization</p>
                </div>
                <div className = 'overflow-auto whitespace-nowrwap flex flex-row gap-2'>
                        <div className="py-1 rounded-md flex flex-row items-center gap-2 drop-shadow-md">
                            <UserPersonalization color = "black" type = 'Avatar'/>
                            <ColorPersonalization color = "pink" type = 'Border'/>
                            <ColorPersonalization color = "rgb(253 230 138)" type = "Theme"/>
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