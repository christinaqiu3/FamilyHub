import Link from 'next/link'
import Image from 'next/image'
import {useContext} from 'react'

import {GroupData} from '../providers'

const Header = ({title}) => {
    let {groupData} = useContext(GroupData)
    return (
      <div /*style = {{backgroundColor: groupData.user.myAppThemeBaseColor}} */
          className="flex w-full justify-center med-theme-color border-b py-4 px-6">
        <Link href = 'profile' className="hover:bg-gray-200 rounded-lg">
            {(title === "Profile") ?
                (<Image
                    src="/profile-icon2.png"
                    alt="home"
                    width={31}
                    height={31}
                    priority
                />) : (<Image
                    src="/profile-icon1.png"
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