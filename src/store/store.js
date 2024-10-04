import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slicefeatures/todoSlice'

 const store = configureStore({
  reducer: todoReducer
})

export default store;