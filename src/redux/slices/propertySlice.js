import { createSlice } from '@reduxjs/toolkit';

const propertySlice = createSlice({
    name: 'properties',
    initialState: {
       searchProperties :'',
    },
    reducers : {
        addProperty : (state, action) =>{
            state.searchProperties = action.payload
        }
    }
})
export const {addProperty} = propertySlice.actions
export default propertySlice.reducer;