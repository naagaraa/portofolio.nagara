import { useRef } from "react";
import Image from "next/image";
import Link from 'next/link'


export default function navbar() {
  return (
    <div className="container-fluid py-md-5 px-md-3">
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
                  <li className="nav-item">
                     <Link href="#contact">
                     <a className="nav-link active" aria-current="page">
                        <h5>contact me</h5>
                     </a>
                     </Link>
                  </li>
                  <li className="nav-item">
                      <Link href="/about">
                     <a className="nav-link active" aria-current="page">
                        <h5>see my cv</h5>
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

