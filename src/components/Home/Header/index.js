import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="page-header">
        <div className="page-header-content">
            <div className="page-header-logo">
                Cafe Logo
            </div>
            <div className="page-header-links">
                <div className="page-header-link">
                    About Us
                </div>
                <div className="page-header-link">
                    Timeline
                </div>
                <div className="page-header-link">
                    Menu
                </div>
                <div className="page-header-link">
                    Location
                </div>
            </div>
            <div className="page-header-search">
                <input type="search" className="page-header-search__input" placeholder="Search our Tasty Menu..." />
            </div>
        </div>
    </header>
  )
}

export default Header