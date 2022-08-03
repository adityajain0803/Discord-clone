// import update from "react-addons-update";

// const INITIAL_STATE = {
//     array1: []
// }
// const reducer = (state= INITIAL_STATE, action={}) => {
//     switch(action.type){
//         case 'UPDATE_ARRAY':
//             return update(state,{
//                 array1: {
//                     [action.id]: {
//                         $set: action.content
//                     }
//                 }
//             });
//         default:
//             return state;
//     }
// };

// export default reducer;

import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  itemList : []
}

const channelSlice = createSlice({
  name: "Channels",
  initialState,
  reducers: {
    saveChannel: (state, action) => {
      state.itemList.push(action.payload)
    }
  }
});

export const { saveChannel } = channelSlice.actions

export default channelSlice.reducer