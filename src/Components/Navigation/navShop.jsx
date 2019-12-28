import React from 'react'

import Search from '../../assets/search.svg'
import User from '../../assets/user.svg'
import Cart from '../../assets/shopping-bag.svg'


const NavShop = () => (
    <div className="navShop">
        <ul>
            <li><a href="#">Search {'    '} <img  src={Search} alt="" className="searchIcon"/></a></li>
            <li><a href="#">Singin {'    '} <img src={User} alt="" className="userIcon"/></a></li>
            <li><a href="#">Cart {'    '} <img src={Cart} alt="" className="cartIcon"/></a></li>
        </ul>
    </div>
)

export default NavShop;