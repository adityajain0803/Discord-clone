import React from 'react'
import "./ChatHeader.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import TagIcon from '@mui/icons-material/Tag';
// import EditLocationIcon from '@mui/icons-material/EditLocation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PushPinIcon from '@mui/icons-material/PushPin';
import SearchIcon from '@mui/icons-material/Search';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
// import Sidebar from './Sidebar';

function ChatHeader(props) {
  return (
    <div className='chatHeader'>
        <div className='chatHeader_left'>
            <h3>
               <span className='chatHeader_hash'>
                    #
                </span>
                abcd
            </h3>
        </div>
        <div className='chatHeader_right'>
            <TagIcon />
            <NotificationsIcon />
            <PushPinIcon />
            <PeopleAltIcon />
            <div className='chatHeader_search'>
                <input placeholder="Search" />
                <SearchIcon />
            </div>
            <InboxIcon />
            <HelpIcon />
        </div>
    </div>
  )
}

export default ChatHeader;