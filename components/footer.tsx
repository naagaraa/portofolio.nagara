import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <div className="container mt-5 pt-3">
      <div className="row">
        <div className="col">
          <h1 id="contact">say hi 👋</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="d-flex">
            <ul className="navbar-nav flex-row ">
              <li className="nav-item me-5">
                <Link href="https://www.linkedin.com/in/nagara/">
                  <a className="nav-link active" aria-current="page">
                    <h2>Linkedln</h2>
                  </a>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link href="https://www.youtube.com/channel/UCYsZhw6Mlk23Q-nUPP9t1YA">
                  <a className="nav-link active" aria-current="page">
                    <h2>Youtube</h2>
                  </a>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link href="https://github.com/naagaraa">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    target="_blank"
                  >
                    <h2>github</h2>
                  </a>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link href="#">
                  <a className="nav-link active" aria-current="page" href="#">
                    <h2>Email</h2>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
