import React from 'react'

import elle from '../../assets/elle.png'



const ModeLists = () => (
    <div className="ModelLists">
        <img src={elle} alt="Model"/>

        <ul>
            <li><a href="#">01. <br/> The Stay Warm Sale</a></li>
            <li><a href="#">02. <br/> Nero Royal</a></li>
            <li><a href="#">03. <br/> TechLoom Phantom</a></li>
        </ul>
    </div>
)

export default ModeLists;