import React from 'react'

import NavMenu from './navMenu'
import NavShop from './navShop'

import logo from  '../../assets/logo.png'


const NavBar = () => (
    <div className="navBar">
        <span className="logoUrban"><img src={logo} alt="Logo"/></span>
        <NavMenu/>
        <NavShop/>
    </div>
)

export default NavBar;