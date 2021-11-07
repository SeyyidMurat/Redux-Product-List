import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	cart:[],
};


export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart(state,action){
			const addedItem = state.cart.find((item)=>item.id === action.payload.id ? true : false);
			const newCart = addedItem ? state.cart.map((e)=> e.id === action.payload.id ? { ...e, qty: e.qty + 1 } : e ) : [...state.cart, { qty:1, ...action.payload } ];
			state.cart = newCart;
		},
		setQuantity(state, action){
			const newQuantity =state.cart.map((item)=>item.id === action.payload.id ? { ...item, qty: action.payload.target }: item);
			state.cart = newQuantity;
		},
		setDelete(state,action){
			const newArray =state.cart.filter((item)=>item.id !== action.payload);
			state.cart = newArray;
		}
	},

});

export const { setCart,setQuantity,setDelete } = cartSlice.actions;
export default cartSlice.reducer;
