import { createSlice } from '@reduxjs/toolkit'
import type { Item } from '../mock'

export interface CartItem {
  [key: string]: {
    count: number,
    price: number,
    name: string,
  }
}

export const itemSlice = createSlice({
  name: 'item',
  initialState: {
    items: [] as Item[],
		cart: {} as CartItem,
		isMock: false,
    searchQuery: '',
  },
	reducers: {
		addToCart: (state, action) => {
			state.cart[action.payload.id] = {
				count: state.cart[action.payload.id]?.count + 1 || 1,
				price: state.cart[action.payload.id]?.price + action.payload.price || action.payload.price,
				name: state.cart[action.payload.id]?.name || action.payload.name,
			}
		},
		setItems: (state, action) => {
			state.items = action.payload
		},
		setIsMock: (state, action) => {
			state.isMock = action.payload
		},
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    }
	},
})

export const itemReducer = itemSlice.reducer;
export const { addToCart, setItems, setIsMock, setSearchQuery } = itemSlice.actions;
