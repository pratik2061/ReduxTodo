import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "second try of making CRUD app with redux.",
      completed: false,
    },
    {
      id: 2,
      text: "Do projects",
      completed: false,
    },
    {
      id: 3,
      text: "Redux is just amazing",
      completed: false,
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
    completedTodo:(state,action)=>{
      const {id,completed} = action.payload;
      const complete = state.todos.find((todo)=>todo.id == id)
      if(complete){
        complete.completed = completed;
      }
    }
  },
});

export const { addTodo, removeTodo, editTodo,completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
