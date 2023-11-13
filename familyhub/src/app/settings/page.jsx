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

export default function SettingsPage() {
    return (
        <main className = "text-black">
            <Header title = "Settings"/>
            <div style = {{overflow: 'scroll', margin: 10}}>

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
                                width = {20}
                                height = {20}/>
                        <p className = 'px-2'>Notifications</p>
                    </div>
                    <div>
                        <LabelSwitch label = "Event Notifications"/>
                        <LabelSwitch label = "Poll Notifications"/>
                        <LabelSwitch label = "Chat Notifications" />
                        <LabelSwitch label = "Status Notifications" />
                    </div>
                </div>
                <div style = {{overflow: 'scroll', margin: 10}}>
                <div className = 'flex py-2 flex-column'>
                    <Image src='/edit.svg' 
                            width = {20} 
                            height = {20}/>
                    <p className = 'px-2'>Personalization</p>
                </div>
                </div>
            </div>         
            <Navigation page = "settings"/>
        </main>
    )
}