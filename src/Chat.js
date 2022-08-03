import React from 'react'
import "./Chat.css";
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import NoteIcon from '@mui/icons-material/Note';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import {useState} from 'react';

function Chat() {
    const [data,setData]= useState();
    // const [print, setPrint]=useState(false);
    const [messageList, setMessageList]=useState([]);
    // const [message, setMessage] = useState();

    function getData(val) {
        console.log("inside Message getData")
        console.log("Message val => ", val)
        
        messageList.push(val);
        console.log("MessageList => ", messageList)        
    }
    function abc(e){
        // console.log(abc)
        // console.log(e.target.value)
        // getData(e.target.value);
        // getData(e.target.value);
          setData(e.target.value)

    }

    // function resetField(){
    //     setData('')
    // }

    const handleOnClick = (e) => {
        messageList.push(data);
        setData('')

    }
    
    console.log("Message list => ", messageList);

  return (
    <div className='chat'>
        <ChatHeader />
        <div className='chat_messages'>
            {
                messageList.length!=0? (<Message data={messageList} />):(<></>)
            }
        </div>
        <div className='chat_input'>
            <AddCircleIcon fontSize="large" />
            <div>
                <input placeholder="Type Here" value={data} onChange={abc} />
                <button type= "Submit" onClick={()=>{handleOnClick()}} > Send Message </button>
            </div>
            <div className='chat_inputIcons'>
                <CardGiftcardIcon />
                <GifIcon />
                <NoteIcon />
                <EmojiEmotionsIcon />
            </div>
        </div>
    </div>
  );
}

export default Chat;