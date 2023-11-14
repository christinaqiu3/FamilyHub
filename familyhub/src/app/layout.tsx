import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

import { DeviceFrameset } from 'react-device-frameset'
import { isBrowser } from 'react-device-detect';

import Navigation from './components/navigation'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })
const satoshi = localFont({ src: '../../assets/fonts/Satoshi-Variable.woff'})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (isBrowser) {
    return (
      <html lang="en">
        <body className={satoshi.className}>
        <div style = {{display: 'flex', justifyContent: 'center'}}>
          <div style = {{height: 667, width: 376, backgroundColor: '#FFFFFF'}}>
            {children}
          </div>
          
        </div>
        </body>
      </html>
    )
  } else {
    <html lang="en">
        <body className={satoshi.className}>
        {children}
          </body>
      </html>
  }
}
