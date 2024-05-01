import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

export const initialVal = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
};
const userSlice = createSlice({
  name: "users",
  initialState: initialVal,
  reducers: {
    addUser: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const numID = state.products.find((user) => user.id == id);
      if (numID) {
        const updateProducts = state.products.filter((user) => user.id != id);
        state.products = updateProducts
        localStorage.setItem('products', JSON.stringify(state.products))
        // return updateProducts
      }
    },
    updateUser: (state, action) => {
      const { id, name, price,category,description } = action.payload;
      const upUser = state.products.find((user) => user.id == id);
      if (upUser) {
        upUser.name = name;
        upUser.price = price;
        upUser.category = category;
        upUser.description = description;
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
