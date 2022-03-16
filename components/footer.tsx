import React from 'react'

export default function footer() {
  return (
    <div className='container mt-5 pt-3'>
      <div className="row">
         <div className="col">
            <h1 id='contact'>say hi 👋</h1>
         </div>
      </div>
      <div className="row">
         <div className="col">
            <div className="d-flex">
               <ul className="navbar-nav flex-row ">
                  <li className="nav-item me-5">
                     <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/nagara/">
                        <h2>Linkedln</h2>
                     </a>
                  </li>
                  <li className="nav-item me-5">
                     <a className="nav-link active" aria-current="page"
                        href="https://www.youtube.com/channel/UCYsZhw6Mlk23Q-nUPP9t1YA">
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
      </div>
   </div>

  )
}
