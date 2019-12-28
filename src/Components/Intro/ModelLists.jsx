import React from 'react'

import elle from '../../assets/elle.png'



const ModeLists = () => (
    <div className="ModelLists">
        <div className="elle">
        <img src={elle} alt="Model"/>
        </div>

       <div className="small-menu">
        <ul>
                <li className="activeSmall"><a href="#" >01. <br/> The Stay Warm Sale</a></li>
                    <br/>
                <li className="noActiveSmall"><a href="#" >02. <br/> Nero Royal</a></li>
                    <br/>
                <li className="noActiveSmall"><a href="#" >03. <br/> TechLoom Phantom</a></li>
            </ul>
       </div>
    </div>
)

export default ModeLists;