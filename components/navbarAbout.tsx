import { useRef } from "react";
import Image from "next/image";
import Link from 'next/link'

export default function navbarAbout() {
  return (
    <div className="container py-5 px-3">
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
            <Link href="/">
               <a className="navbar-brand">  
               <Image
               src="/favicon-32x32.png"
               alt="Landscape picture"
               width={32}
               height={32}
               />
               </a>
            </Link>
            <div className="d-flex">
               <ul className="navbar-nav">
                  <li className="nav-item">\
                  <Link href="/">
                     <a className="nav-link active" aria-current="page">
                        <h5>Home</h5>
                     </a>
                  </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </div>
  );
}

