import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[]
};

const cartSlice = createSlice({

    name:"cart",

    initialState,

    reducers:{

        addItem:(state,action)=>{

            const existing=state.items.find(
                item=>item.id===action.payload.id
            );

            if(existing){

                existing.quantity++;

            }

            else{

                state.items.push({
                    ...action.payload,
                    quantity:1
                });

            }

        },

        removeItem:(state,action)=>{

            state.items=state.items.filter(
                item=>item.id!==action.payload
            );

        },

        updateQuantity:(state,action)=>{

            const item=state.items.find(
                plant=>plant.id===action.payload.id
            );

            if(item){

                item.quantity=action.payload.quantity;

                if(item.quantity<=0){

                    state.items=state.items.filter(
                        plant=>plant.id!==item.id
                    );

                }

            }

        }

    }

});

export const{

    addItem,
    removeItem,
    updateQuantity

}=cartSlice.actions;

export default cartSlice.reducer;