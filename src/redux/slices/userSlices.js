import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
   name: 'user',
   initialState : {
      userAuth : [],
      loading: true,
      loading2: true,
      admin: 'initial',
     },
     reducers:{
        addUserAuth : (state, action) =>{
           state.userAuth = action.payload
        },
        removeUserAuth: (state, action) =>{
           state.userAuth = action.payload
        },
        handleLoading: (state, action) =>{
           state.loading = action.payload
        },
        handleLoading2: (state, action) =>{
           state.loading2 = action.payload
        },
        handleAdmin: (state, action) =>{
           state.admin = action.payload
        }
     }
  })
  export const { addUserAuth,handleAdmin, removeUserAuth,handleLoading ,handleLoading2} = userSlice.actions
  export default userSlice.reducer