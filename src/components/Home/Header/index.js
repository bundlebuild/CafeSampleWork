import React from 'react'
import './header.css'

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = (type) => {
        setOpen(!open);
        if(type == "ABOUT_US") {
            window.location = "#ABOUTUS";
        }

        if(type == "TIMELINE") {
            window.location = "#TIMELINE";
        }

        if(type == "OUR_SERVICES") {
            window.location = "#OURSERVICES";
        }

        if(type == "OUR_LOCATIONS") {
            window.location = "#OURLOCATIONS";
        }
    }
  return (
    <>
        <header className="page-header">
        <div className="page-header-content">
            <div className={`only-mobile hamburger`}>
                <button class={`hamburger hamburger--collapse ${open == true ? 'is-active': ''}`} type="button" onClick={() => setOpen(!open)} style={{outline: 'none'}}>
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className="page-header-logo">
                Cafe Logo
            </div>
            <div className="page-header-links only-desktop">
                <div className="page-header-link" onClick={() => navigate("ABOUT_US")}>
                    About Us
                </div>
                <div className="page-header-link" onClick={() => navigate("TIMELINE")}>
                    Timeline
                </div>
                <div className="page-header-link" onClick={() => navigate("OUR_SERVICES")}>
                    Our Services
                </div>
                <div className="page-header-link" onClick={() => navigate("OUR_LOCATIONS")}>
                    Our Locations
                </div>
            </div>
            <div className="page-header-search">
                <input type="search" className="page-header-search__input" placeholder="Search our Tasty Menu..." />
            </div>
        </div>
    </header>

        <div className={`mobile-sidebar only-mobile ${open == true ? 'open': ''}`}>
        <div className="mobile-sidebar-items">
            <div className="mobile-sidebar-item" onClick={() => navigate("ABOUT_US")}>
                About Us
            </div>
            <div className="mobile-sidebar-item" onClick={() => navigate("TIMELINE")}>
                Timeline
            </div>
            <div className="mobile-sidebar-item" onClick={() => navigate("OUR_SERVICES")}>
                Our Services
            </div>
            <div className="mobile-sidebar-item" onClick={() => navigate("OUR_LOCATIONS")}>
                Our Locations
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Header