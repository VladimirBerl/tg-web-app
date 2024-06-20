// Метод redux-toolkit создание слайса
import { createSlice } from "@reduxjs/toolkit";

// my
import {userName, userId} from '../../storage/storage' 

// параметры для setUser и removeUser
const initialState = {
  id: userId,
  name: userName,
  token: 0,
  tokenFarmTimeCount:1,  
  tokenFarmTime: 60,
};

// карточка userSlice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // добавление user
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem('email', state.email)
    },
    // удаление user
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const {setUser,removeUser} = userSlice.actions

export default userSlice.reducer