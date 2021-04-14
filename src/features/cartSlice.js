import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [
      {
        id: 1,
        name: "Alex Vando Mens Dress Shirts",
        subinformation: "Good quality construction, Easy care: This dress shirt is nicely stitched and detailed with 100% hypoallergenic synthetic filling.",
        price: "$23.99",
        url: 'image1'
      },
      {
        id: 2,
        name: "Spalding NBA Street Outdoor Basketball",
        subinformation: "Performance: Durable outdoor rubber cover. Superior control: Deep channel design for easy handles",
        price: "$25.00",
        url: 'image2'
      },
      {
        id: 3,
        name: "HP Chromebook 14-inch HD Laptop, Intel Celeron N4000.",
        subinformation: "Google play store: The millions of Android apps you know and love on your phone and tablet can now run on your Chrome device without compromising their speed.",
        price: "$59.11",
        url: 'image3'
      },
      {
        id: 4,
        name: "Chic Home Zarah 10 Piece Comforter Bedding with Sheet Set and Decorative Pillows Shams.",
        subinformation: "The Zarah queen size patchwork comforter is stuffed with 100% hypoallergenic synthetic filling.",
        price: "$45.60",
        url: 'image4'
      }
    ]
  },
  reducers: {
    add: (state) => {
      state.value += 1
    },
    minus: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, minus } = cartSlice.actions

export default cartSlice.reducer