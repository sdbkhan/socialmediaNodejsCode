import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  alertMessage: "",
  setOpenAlertModal: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setAlertMessage: (state, action) => {
      state.alertMessage = action.payload;
    },
    setAlertModalOpen: (state) => {
      state.setOpenAlertModal = true;
    },
    setAlertModalClose: (state) => {
      state.setOpenAlertModal = false;
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      // debugger
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPost = state.posts.map((post) => {
        if (post._id === action.payload.post_id) return action.payload.post;
        return post;
      });
      state.posts = updatedPost;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setPosts,
  setPost,
  setAlertMessage,
  setAlertModalOpen,
  setAlertModalClose
} = authSlice.actions;
export default authSlice.reducer;
