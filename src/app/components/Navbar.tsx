import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './Modetoggle'

const Navbar = () => {
  return (<>

<div className='flex p-4 gap-x-10 font-semibold text-xl font-sans'>
    <Link href={"/"}>
    <h1 className='ml-10'>Home</h1>
    </Link>
    <h2>Blogs</h2>
    <h3>About</h3>
    <h4>Contact Us</h4>
    <h5 className='flex items-center justify-center ml-[40%]'>
    <ModeToggle/>
    </h5>
    </div>
    </>
  )
}

export default Navbar