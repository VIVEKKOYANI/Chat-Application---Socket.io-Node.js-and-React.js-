import React from 'react'
import onlineIcon from '../../icons/onlineIcon.png'
import closeIcon from '../../icons/closeIcon.png'
import './InfoBar.css'

const InfoBar = () => {
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image" />
            <h3>roomName</h3>
        </div>
        <div className="RightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close image" /></a>
        </div>
    </div>
}

export default InfoBar;