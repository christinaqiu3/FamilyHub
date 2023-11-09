import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {

    return (
      <div className="bottom-0 flex py-4 w-11/12 items-center justify-center bg-gray-100 rounded-full mb-4 shadow-lg">
        <ul className="flex flex-row gap-10">
          <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/">
            <Image
              src="/home.svg"
              alt="home"
              width={28}
              height={28}
              priority
            />
            </Link></li>
            <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/calendar">
            <Image
              src="/calendar.svg"
              alt="home"
              width={32}
              height={32}
              priority
            />
            </Link></li>
            <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/checkin">
            <Image
              src="/checkin.svg"
              alt="home"
              width={32}
              height={32}
              priority
            />
            </Link></li>
            <li className="hover:bg-gray-200 rounded-md px-2 py-2"><Link href="/memories">
            <Image
              src="/memories.svg"
              alt="home"
              width={36}
              height={36}
              priority
            />
            </Link></li>
        </ul>
      </div>
    )
}

export default Navigation