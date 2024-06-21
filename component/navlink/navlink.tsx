'use client'

import { usePathname } from 'next/navigation'

export default function Navlink(){
  const pathname = usePathname()
return(
    <ul className="navbar-nav justify-content-evenly flex-grow-1 ps-3">
             <li className="nav-item">
               <a className={`nav-link ${pathname === '/' ? 'activelink' : ''}`} aria-current="page" href="../">Home</a>
             </li>
             <li className="nav-item">
               <a className={`nav-link ${pathname === '/aboutus' ? 'activelink' : ''}`} href="../aboutus">About us</a>
            </li>  
             <li className="nav-item">
               <a className={`nav-link ${pathname === '/whitepaper' ? 'activelink' : ''}`} href="../whitepaper">White paper</a>
             </li>  
             <li className="nav-item">
               <a className={`nav-link ${pathname === '/roadmap' ? 'activelink' : ''}`} href="../roadmap">Road Map</a>
             </li>  
           </ul>
)
}