import Link from 'next/link'
import Image from 'next/image'
import {useContext} from 'react'

import {GroupData} from '../providers'

const Header = ({title}) => {
    let {groupData} = useContext(GroupData)
    return (
      <div style = {{backgroundColor: groupData.user.myAppThemeBaseColor}} 
          className="flex w-full justify-center med-theme-color border-b py-4 pl-8">
        <p className = "text-2xl flex-1 text-black text-center text-bold">{title}</p>
        <div className = "hover:bg-gray-200 rounded-md ml-auto pr-4"><Link href = 'settings'>
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
    )
}

export default Header