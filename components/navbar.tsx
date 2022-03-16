import { useRef } from "react";
import Image from "next/image";

export default function navbar() {
  return (
    <div className="container py-5 px-3">
      <nav className="navbar navbar-expand-lg navbar-light">
         <div className="container-fluid">
            <a className="navbar-brand">  
            <Image
              src="/favicon-32x32.png"
              alt="Landscape picture"
              width={32}
              height={32}
            />
            </a>
            <div className="d-flex">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#contact">
                        <h5>contact me</h5>
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">
                        <h5>see my cv</h5>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   </div>
  );
}

