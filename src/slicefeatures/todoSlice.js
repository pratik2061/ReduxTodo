import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "second try of making CRUD app with redux.",
    },
    {
      id: 2,
      text: "Do projects",
    },
    {
      id: 3,
      text: "Redux is just amazing",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id == id);
      if (todoToEdit) {
        todoToEdit.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
