import { Avatar } from '@mui/material';
import React, {useState} from 'react'
import "./Message.css";


function Message(props) {
  const [array, setArray] = useState(props.data);
  return (
    <div className='message'>
        <Avatar />
        {array.map((element)=>{
          return(
            <div className='message_info'>
              <h4>
                Aditya Jain
                  <span className='message_timestamp'>
                    this is a timestamp
                  </span>
                  {element}
              </h4>
            </div>
        )})}
          
    </div>
  )
}

export default Message;