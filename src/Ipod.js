import React from 'react';
import Wheel from './Wheel';
import Display from './Display';


const Ipod= (props) => {
    const {songs}= props;
    return(
       <div className="ipod">
          
               <Display
               songs={songs}
               />
               <Wheel/>
           
       </div>
    );
}

export default Ipod;