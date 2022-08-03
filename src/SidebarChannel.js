import React, { useState } from 'react'
import "./SidebarChannel.css";
// import _forEach from 'lodash/forEach'


function SidebarChannel(props) {

  const [array, setArray] = useState(props.data);
  console.log(props.data)
  return (
    <div className='sidebarChannel'>
      {array.map((element)=>{
        return(
          <h4>
          <span className='sidebarChannel_hash'>
              #
          </span>
          {element.item}
        </h4>
    )})}
        
    </div>
  )
}

export default SidebarChannel;

