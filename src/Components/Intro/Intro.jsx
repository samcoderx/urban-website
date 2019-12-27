import React from 'react'

import Heros from './Heros'
import ModelLists from './ModelLists'

const Intro = () => (
    <div className="Intro">
        <Heros/>
        <ModelLists/>

        {/* Social Network */}

        <div className="social">
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </div>
    </div>
)

export default Intro;