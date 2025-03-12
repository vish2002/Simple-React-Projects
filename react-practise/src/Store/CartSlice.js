import {createSlice} from '@reduxjs/toolkit'

const initialState=[];
const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1); // Removes only the first occurrence
            }
        
        }
    }
});

export const {add,remove}=CartSlice.actions;
export default CartSlice.reducer;