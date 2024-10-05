import { useSelector, useDispatch } from "react-redux";
import { completedTodo, removeTodo } from "../slicefeatures/todoSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

function TodoItems() {
  const [status, setStatus] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="w-[100%] h-[80vh] flex justify-center">
      <div className="w-[800px] bg-green-800 rounded-lg">
        {todos.map((todo) => {
          return (
            <li
              className="bg-[#023020] px-[10px] py-[10px] mx-[4px] my-[10px] rounded-md list-none text-2xl font-medium"
              key={todo.id}
            >
              <span className="p-[5px] mx-[10px]">
                <input
                defaultChecked={status}
                onChange={()=>(setStatus((prev)=>!prev))}
                onClick={()=>dispatch(completedTodo({
                  id : todo.id,
                  completed : !(todo.completed)
                }))}
                  type="checkbox"
                  className="outline-none hover:cursor-pointer"
                />
              </span>
              <span className={`${todo.completed ? "line-through": ""}`}> {todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="float-right bg-red-800 px-[10px] rounded-md text-xl"
              >
                DELETE
              </button>
              <Link
                to={`/edit/${todo.id}`}
                className="float-right bg-yellow-800 mx-[10px] px-[10px] text-xl rounded-md"
              >
                EDIT
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default TodoItems;
