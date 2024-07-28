import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <header className="mb-2">
    <div className="top_header pt-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-4">
            <div className="top_menu_item">
              <nav className="nav">
              <Link className="nav-link" to='/'>
                 Car Listing
                 </Link>
              </nav>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-4">
            <div className="top_menu_item text-center">
              <h6 className='mobile-logo'>CAR LISTING</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-4">
            <div className="top_menu_item d-flex justify-content-end">
              <nav className="nav">
                <Link
                  className="nav-link mobile_nav"
                  to='#'
                >
                  <span>
                    <img src="/image/icon-3.png" alt=''/>
                  </span>
                  sign in
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
 
  </>
  )
}
