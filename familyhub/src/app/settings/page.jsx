import Header from '../components/header'
import Navigation from '../components/navigation'

export default function SettingsPage() {
    return (
        <main>
            <Header title = "Settings"/>            
            <div>
                <p>Current: Mob's Family</p>
            </div>
            <Navigation page = "settings"/>
        </main>
    )
}