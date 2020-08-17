import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Display= (props) => {
    
    return(
        <div id="display-container">
            <div id="list-container">
                <ul id="menu-list">
                    <li id="list-heading">ipod.js <span><FontAwesomeIcon icon="battery-full" className="battery"/></span></li>
                    <li className="active" id="1"><span>Songs</span> <FontAwesomeIcon icon ="greater-than" className="list-arrow-icon"/></li>
                    <li id="2"><span>Albums</span><FontAwesomeIcon icon ="greater-than" className="list-arrow-icon"/></li>
                    <li id="3"><span>Artists</span><FontAwesomeIcon icon ="greater-than" className="list-arrow-icon"/></li>
                    <li id="4"><span>Playlist</span><FontAwesomeIcon icon ="greater-than" className="list-arrow-icon"/></li>   
                </ul> 
            </div>
            <div id="songs">
                <div className="upper-part">
                <div className="image-container" id="song-image" > </div>
                </div>
                
                <div className="controller">
                    <div id="song-tittle">Demo</div>
                    {/* <audio controls>
                        <source src="ipodjs\src\static\Imagine Dragons - Believer.mp3" type="audio/mpeg"></source>
                    </audio> */}
                    <div className="slider" id="seek-bar">
                        <div id="fill"></div>
                        <div id="handle"></div>
                    </div>
                    <div className="playback-controllers">
                    <span id="backward"><FontAwesomeIcon icon ="backward"/></span>
                    <FontAwesomeIcon icon= "play"/>
                    <FontAwesomeIcon icon= "pause"/>
                    <span id="forward"><FontAwesomeIcon icon ="forward" /></span>
                    
                    </div>
                </div>
            </div>
            <div id="albums">album</div>
            <div id="artists">Artists</div>
            <div id="playlist">Playlist</div>


        </div>
    );
}


export default Display;