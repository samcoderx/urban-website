import React from 'react'

import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'



const Social = () => (
    <div className="socialMediaIcon">
        <div className="social">
            <ul>
                <li><a href="#"> <img src={facebook} alt=""/> </a></li>
                <li><a href="#"><img src={instagram} alt=""/></a></li>
                <li><a href="#"><img src={twitter} alt=""/></a></li>
            </ul>
        </div>
    </div>
)

export default Social;