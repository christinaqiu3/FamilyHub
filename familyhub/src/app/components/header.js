import Link from 'next/link'
import Image from 'next/image'
import {useContext} from 'react'

import {GroupData} from '../providers'

const Header = ({title}) => {
    let {groupData} = useContext(GroupData)
    //console.log(getComputedStyle(document.documentElement)
    //.getPropertyValue('--app-theme-color-med'))
    document.documentElement.style.setProperty('--app-theme-color-med', groupData.user.myAppThemeMedColor);
    document.documentElement.style.setProperty('--app-theme-color-dark', groupData.user.myAppThemeDarkColor);
    document.documentElement.style.setProperty('--app-theme-color-light', groupData.user.myAppThemeLightColor);


    return (
      <div
          className="flex w-full justify-center med-theme-color border-b py-4 px-6">
        <Link href = 'profile' className="hover:bg-gray-200 rounded-lg">
            {(title === "Profile") ?
                (<Image
                    src="/profile-iconG.png"
                    alt="home"
                    width={31}
                    height={31}
                    priority
                />) : (<Image
                    src="/profile-iconW.png"
                    alt="home"
                    width={31}
                    height={31}
                    priority
                />)}
            </Link>
        <p className = "text-2xl flex-1 text-black text-center text-bold">{title}</p>
        <div className = "rounded-md ml-auto">
          <div className="flex flex-row gap-1">
            <Link href = 'settings' className="hover:bg-gray-200 rounded-lg">
              {(title === "Settings") ? 
                (<Image
                  src="/h-settings.svg"
                  alt="home"
                  width={31}
                  height={31}
                  priority
                />) : (<Image
                  src="/settings.svg"
                  alt="home"
                  width={31}
                  height={31}
                  priority
                />)}
            </Link>
          </div>
          
        </div>
      </div>
    )
}

export default Header