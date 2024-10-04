import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layouts from './Layouts.jsx';
import TodoItems from './components/TodoItems.jsx';
import AddTodo from './components/AddTodo.jsx';
import EditTodo from './components/EditTodo.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts />}>
      <Route path="/" element={<TodoItems />} />
      <Route path="create" element={<AddTodo />} />
      <Route path="edit/:text_id" element={<EditTodo />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
