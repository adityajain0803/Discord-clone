import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import React from 'react'

function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props;
  return (
    <Dialog open = {openPopup}>
        <DialogTitle>
            <div> Enter Channel Name </div>
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
    </Dialog>
  )
}

export default Popup;