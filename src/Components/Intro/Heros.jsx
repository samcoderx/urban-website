import React from 'react'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'


const Heros = () => (
    <div className="Heros">
        <div className="presentation">
            <div className="small-title">
            {/* <p className="number"><span>01</span></p> */}
            <p className="title-small">Sale Of 60% in Spring</p>
            </div>
            <h1 className="title">The Stay Warm Sale</h1>

            <a href="#" className="discover">DISCOVER NOW</a>
        </div>
        {/* <div className="social">
            <ul>
                <li><a href="#"> <img src={facebook} alt=""/> </a></li>
                <li><a href="#"><img src={instagram} alt=""/></a></li>
                <li><a href="#"><img src={twitter} alt=""/></a></li>
            </ul>
        </div> */}
    </div>
)

export default Heros;