'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import DarkModeSwitch from "./DarkModeSwitch"

export default function Header() {
  const routePathName = usePathname()
  const isActive: (pathname: String) => Boolean =(pathname)=>routePathName===pathname

  return (
    <div className='flex items-center dark:bg-cyan-900 bg-yellow-100 py-6'>
      <div className='text-2xl font-bold ml-6 w-1/6'>
        <Link
          href="/" 
          data-active={isActive('/')}
          className="font-bold text-2xl mx-3 data-[active=true]:text-cyan-300">
          Mock App
        </Link>
      </div>
      <div className='flex w-5/6'>
        <div>
          <Link
            href="/endpoint" 
            data-active={isActive('/endpoint')}
            className="font-bold text-lg mx-3 data-[active=true]:text-cyan-500">
            Index
          </Link>
          <Link
            href="/endpoint/create"
            data-active={isActive('/endpoint/create')}
            className="font-bold text-lg mx-3 data-[active=true]:text-cyan-500">
            Create
          </Link>
        </div>
      </div>
      <div className="space-x-5 right-0 w-1/6">
        <DarkModeSwitch/>
      </div>
    </div>
  )
}
