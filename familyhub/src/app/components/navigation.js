import Image from 'next/image'
import Link from 'next/link'
import {useContext} from "react";
import {GroupData} from "../providers";

const Navigation = ({page}) => {
    let {groupData} = useContext(GroupData)
    return (
      <div className="bottom-0 relative flex py-1 items-center justify-center med-theme-color rounded-full mb-4 shadow-lg z-30">
        <ul className="flex flex-row gap-10">
          <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/">
            {(page === "home") ? 
            (<Image
              src="/h-homeG.svg"
              alt="home"
              width={28}
              height={28}
              priority
            />) : (<Image
              src="/homeW.svg"
              alt="home"
              width={28}
              height={28}
              priority
            />)}
            </Link></li>
            <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/calendar">
            {(page === "calendar") ? 
            (<Image
              src="/h-calendarG.svg"
              alt="home"
              width={30}
              height={30}
              priority
            />) : (<Image
              src="/calendarW.svg"
              alt="home"
              width={30}
              height={30}
              priority
            />)}
            </Link></li>
            <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/checkin">
            {(page === "checkin") ? 
            (<Image
              src="/h-checkinG.svg"
              alt="home"
              width={30}
              height={30}
              priority
            />) : (<Image
              src="/checkinW.svg"
              alt="home"
              width={30}
              height={30}
              priority
            />)}
            </Link></li>
            <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/memories">
            {(page === "memories") ? 
            (<Image
              src="/h-memoriesG.svg"
              alt="home"
              width={35}
              height={35}
              priority
            />) : (<Image
              src="/memoriesW.svg"
              alt="home"
              width={35}
              height={35}
              priority
            />)}
            </Link></li>
        </ul>
      </div>
    )
}

export default Navigation