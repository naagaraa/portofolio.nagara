import React from 'react'

export default function footer() {
  return (
    <div className='container mt-5 pt-3'>
      <h1 id='contact' >say hi 👋</h1>
      <div className="d-flex">
          <ul className="navbar-nav flex-row ">
            <li className="nav-item me-5">
                <a className="nav-link active" aria-current="page" href="#">
                  <h2>Linkedln</h2>
                </a>
            </li>
            <li className="nav-item me-5">
                <a className="nav-link active" aria-current="page" href="#">
                  <h2>Youtube</h2>
                </a>
            </li>
            <li className="nav-item me-5">
                <a className="nav-link active" aria-current="page" href="#">
                  <h2>Email</h2>
                </a>
            </li>
          </ul>
      </div>
    </div>

  )
}
