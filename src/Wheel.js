import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Wheel= (props) => {
    return(
        <div id="container">
            <div id="outer-wheel">
                <div className="menu"><span className="menu-icon">MENU</span></div>
                <div id="inner-wheel"></div>
                <div className="forward">
                    <FontAwesomeIcon icon ="forward" className="icon-class" />
                </div>
                <div className="pause-play">
                    <FontAwesomeIcon icon= "play"className="play-pause-icon"/>
                    <span> </span>
                    <FontAwesomeIcon icon= "pause" className="play-pause-icon"/>
                </div>
                <div className="backward">
                    <FontAwesomeIcon icon ="backward" className="icon-class" />
                </div>
                               
            </div>
        </div>
    );
}

export default Wheel;