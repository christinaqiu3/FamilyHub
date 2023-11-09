import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
    return (
      <div className="flex w-full justify-center bg-amber-200 border-b py-4 pl-8">
        <p className = "text-xl flex-1 text-black text-center">Home</p>
        <div className = "hover:bg-gray-200 rounded-md ml-auto pr-4"><Link href = 'settings'>
            <Image src = "/settings.svg" 
              alt="home"
              width={31}
              height={31}
              priority/>
        </Link>

        </div>
      </div>
    )
}

export default Header