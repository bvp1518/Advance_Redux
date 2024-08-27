import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed:false,
    },

    reducers: {
        // replaceCart(state, action){
        //     state.totalQuantity = action.payload.totalQuality;
        //     state.items = action.payload.items;
        // },
        // // addItemToCart(state, action) {
        //     const newItem = action.payload;
        //     const existingItem = state.items.find((item) => item.id === newItem.id);
        //      console.log("existingItem =====", existingItem={});
        //     state.totalQuantity++;
        //     state.changed = true;
        //     if (!existingItem) {
        //         state.items.push({
        //             id: newItem.id,
        //             price: newItem.price,
        //             quantity: 1,
        //             totalPrice: newItem.price,
        //             name: newItem.title
        //         });
        //     } else {
        //         existingItem.quantity++;
        //         existingItem.totalPrice = state.totalPrice + newItem.price;
        //     }
        // }
        
        
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            console.log("existingItem =====", existingItem); // Removed the assignment of an empty object
            state.totalQuantity++;
            state.changed = true;
            
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price; // Updated to increment the total price correctly
            }
        },        
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem
            }
        }
    }
});




export const cartActions = cartSlice.actions;

export default cartSlice;