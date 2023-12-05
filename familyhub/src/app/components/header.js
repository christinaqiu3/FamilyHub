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
        <div className = "rounded-md ml-auto pr-4">
          <div className="flex flex-row gap-1">
            <Link href = 'profile' className="hover:bg-gray-200 rounded-lg">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1396 13.864C16.1286 13.864 17.0953 13.5708 17.9175 13.0214C18.7397 12.472 19.3806 11.6911 19.759 10.7774C20.1375 9.8638 20.2365 8.85847 20.0436 7.88856C19.8506 6.91866 19.3744 6.02774 18.6752 5.32848C17.9759 4.62922 17.085 4.15302 16.1151 3.96009C15.1452 3.76716 14.1399 3.86618 13.2262 4.24462C12.3126 4.62306 11.5317 5.26392 10.9823 6.08616C10.4329 6.90841 10.1396 7.87511 10.1396 8.86402C10.1396 10.1901 10.6664 11.4619 11.6041 12.3996C12.5418 13.3372 13.8136 13.864 15.1396 13.864Z" fill="#231F20"/>
                <path d="M22.6396 26.364C22.9712 26.364 23.2891 26.2323 23.5235 25.9979C23.758 25.7635 23.8896 25.4455 23.8896 25.114C23.8896 22.7934 22.9678 20.5678 21.3268 18.9268C19.6859 17.2859 17.4603 16.364 15.1396 16.364C12.819 16.364 10.5934 17.2859 8.95246 18.9268C7.31152 20.5678 6.38965 22.7934 6.38965 25.114C6.38965 25.4455 6.52134 25.7635 6.75577 25.9979C6.99019 26.2323 7.30813 26.364 7.63965 26.364H22.6396Z" fill="#231F20"/>
              </svg>
            </Link>
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