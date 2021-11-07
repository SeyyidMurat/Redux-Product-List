import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
	product:[],
	loading:false,
	error:'',
	searchProduct:''
};

export const getProducts = createAsyncThunk('getProduct', async () =>{
	const response = await fetch('https://fakestoreapi.com/products');
	const result = await response.json();
	return result;
});

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSearch(state,action){
			state.searchProduct= action.payload;
		}
	},
	extraReducers:(builder)=>{
		builder.addCase(getProducts.pending, (state,action)=>{
			state.loading=true;
			state.error = '';
		});
		builder.addCase(getProducts.fulfilled, (state,action)=>{
			state.product = action.payload;
			state.loading=false;
		});
		builder.addCase(getProducts.rejected, (state,action)=>{
			state.loading=false;
			state.error= 'Error fetch data';
		});

	}
});

export const { setSearch } = productSlice.actions;
export default productSlice.reducer;
