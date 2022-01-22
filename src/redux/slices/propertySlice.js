import { createSlice } from '@reduxjs/toolkit';

const propertySlice = createSlice({
    name: 'properties',
    initialState: {
        searchedProperties: '',
        filterData: {},
    },
    reducers: {
        addProperty: (state, action) => {
            state.searchedProperties = action.payload
        },
        addFilterValue: (state, action) => {
            state.filterData = action.payload
        }
    }
})
export const { addProperty,addFilterValue } = propertySlice.actions
export default propertySlice.reducer;