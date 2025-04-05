import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[],
    },

    reducers:{
        addToCart: (state, action) =>{
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) =>{
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
        updateQuentity : (state, action) =>{
            const { id, type} = action.payload;
            const product = state.cart.find(item => item.id === id);

            console.log("product", product);
            if(product){
                if(type==="increase"){
                    product.quentity +=1; 
                }else if(type === "decrease" && product.quentity > 1){
                    product.quentity -=1;
                }
            }
        }
    }
});

export const { addToCart, removeFromCart, updateQuentity } = cartSlice.actions;
