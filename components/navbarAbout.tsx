import { useRef } from "react";
import Image from "next/image";
import Link from 'next/link'

export default function navbarAbout() {
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
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

