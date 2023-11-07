import Image from 'next/image'
import Navigation from './components/navigation'
import Header from './components/header'
import { DeviceFrameset } from 'react-device-frameset'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import 'react-device-frameset/styles/marvel-devices.min.css'
import './globals.css'

export default function Home() {
  if (isBrowser) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DeviceFrameset device="iPhone 8" color="gold">
            <div className="flex justify-center items-center py-0">
              <Header/>
              <Navigation/>
            </div>
        </DeviceFrameset>
      </main>
    )
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <DeviceFrameset device="iPhone 8" color="gold">
            <div className="flex justify-center items-center py-0">
              <Header/>
              <Navigation/>
            </div>
        </DeviceFrameset>
      </main>
    )
  }
}
