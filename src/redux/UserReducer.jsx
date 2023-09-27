import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      console.log(id);
      const numID = state.find((user) => user.id == id);
      if (numID) {
        return state.filter((user) => user.id != id);
      }
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const upUser = state.find((user) => user.id == id);
      if (upUser) {
        upUser.name = name;
        upUser.email = email;
      }
      // state.push(action.payload);
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
