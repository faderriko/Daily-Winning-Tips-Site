import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className="bg-neutral">
        <div className="mx-auto max-w-6xl text-2xl">
            <div className="navbar text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <Link href="/results" tabIndex={0} role="button" className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </Link>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box w-52">
                            <li><Link href="/">History</Link></li>
                        </ul>
                    </div>
                    <Link href="/home" className="btn btn-ghost text-xl">
                        <Image
                            src="/football.png" // Route of the image file
                            height={44} // Desired size with correct aspect ratio
                            width={34} // Desired size with correct aspect ratio
                            alt="Your Name"
                        />
                    </Link>
                    <Link role="button" className="btn btn-ghost text-xl" href="https://vercel.com">
                        <Image
                            src="/telegram.png" // Route of the image file
                            height={44} // Desired size with correct aspect ratio
                            width={34} // Desired size with correct aspect ratio
                            alt="Your Name"
                        /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link role="button" className="btn" href="/results">History</Link></li>
                    </ul>
                </div>
            </div>
            </div>
            <hr className="h-1 bg-gray-200"></hr>
        </div>

    )
}
export default Navbar
