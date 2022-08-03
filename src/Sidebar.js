import React, { useState } from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';
import Popup from './Popup';
// import ChatHeader from './ChatHeader';
import { useDispatch } from 'react-redux';
import { saveChannel } from './reducer';
import { useSelector } from "react-redux";

function Sidebar() {
    const reducer = useSelector(state => state.reducer);
    const dispatch = useDispatch()
    // const [channels, setChannels] = useState([]);
    // const handleAddChannel = () => {
    //     const channelName = prompt ('Enter a new channel name');
    // };
    const addChannel = () => {
        console.log(`Adding ${data}`);
        dispatch(saveChannel({
            item : data,
            id: Date.now()
        }))
    }
    const [openPopup, setOpenPopup] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [data,setData]= useState([]);
    // const [print, setPrint]=useState(false);

    function getData(val) {
        console.log("inside getData")
        console.log("val => ", val)
        setData(val)
        itemList.push(val);
        console.log("itemList => ", itemList)        
    }
    function abc(e){
        // console.log(abc)
        // console.log(e.target.value)
        getData(e.target.value);

    }

    // const updateArray = (content) => {
    //     return {
    //         type: "UPDATE_ARRAY",
    //         id: content.id,
    //         content: content.element
    //     }
    // }
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <h3> Aditya Jain </h3>
            <ExpandMoreIcon />
        </div>
        <div className='sidebar_channels'>
            <div className='sidebar_channelsHeader'>
                <div className='sidebar_header'>
                    <ExpandMoreIcon />
                    <h4> Test Channels </h4>
                </div>
                <AddIcon className= 'sidebar_addChannel' onClick = {() => setOpenPopup(true)}/>
                <Popup
                openPopup ={openPopup}
                setOpenPopup={setOpenPopup}
                >
                    <input placeholder={`New Channel Name`} onBlur={abc} />
                    <button className='addChannel-Btn' type='submit' onClick={()=>{setOpenPopup(false);addChannel();}} > Add Channel </button>
                </Popup>
            </div>
            <div className='sidebar_channelslist'>
                {
                    itemList.length!=0? (<SidebarChannel data={itemList} />):(<></>)
                }
                    
                 
            </div>
        </div>
        {/* {
            itemList.map((x) => {
                console.log("x => ", x);
            })
        } */}
        <div className='sidebar_profile'>
            <Avatar />
            <div className='sidebar_profileInfo'>
                <h3> adityajain0909 </h3>
                <p> #thisIsMyID</p>
            </div>
            <div className='sidebar_profileIcons'>
                <MicIcon />
                <HeadsetIcon />
                <SettingsIcon />
            </div>
        </div>
    </div>
  )
}

export default Sidebar;