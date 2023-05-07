import React from 'react'
import './ourLocationItem.css';

const OurLocationItem = ({locationHeading, locationAddress}) => {
  return (
    <div className="our-location-item">
        <div className="our-location-item-icon">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="1024.000000pt" height="1024.000000pt" viewBox="0 0 1024.000000 1024.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
              fill="var(--secondary)" stroke="none">
              <path d="M4735 9554 c-16 -2 -73 -9 -125 -15 -220 -25 -472 -89 -690 -176
              -377 -149 -702 -372 -1016 -695 -459 -472 -721 -1015 -801 -1660 -20 -163 -22
              -552 -4 -718 24 -221 77 -449 138 -595 14 -33 343 -733 730 -1555 388 -822
              854 -1810 1035 -2195 182 -385 347 -734 368 -775 92 -181 255 -307 470 -361
              118 -30 279 -24 395 15 150 51 300 162 378 279 46 69 2156 4557 2195 4667 38
              110 77 274 99 425 14 96 18 183 18 440 -1 282 -3 337 -23 464 -101 644 -398
              1204 -880 1661 -491 467 -1046 724 -1701 790 -94 9 -514 12 -586 4z m500
              -1469 c301 -45 553 -170 783 -390 219 -208 358 -454 424 -753 29 -131 32 -451
              5 -585 -61 -302 -205 -560 -436 -779 -223 -212 -474 -337 -772 -384 -129 -21
              -422 -14 -539 11 -418 91 -796 382 -993 764 -67 129 -98 214 -129 352 -20 91
              -23 130 -23 319 0 189 3 228 23 319 65 291 198 520 430 743 217 208 477 337
              767 382 121 19 338 19 460 1z"/>
              </g>
            </svg>
        </div>
        <div className="our-location-item-content">
          <div className="our-location-item-heading">
            {locationHeading}
          </div>
          <div className="our-location-item-address">
            {locationAddress}
          </div>
          <div className="our-location-item-cta">
            <div className="btn btn-outline">
              Get Map
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurLocationItem