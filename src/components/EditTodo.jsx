import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {editTodo} from '../slicefeatures/todoSlice'

function EditTodo() {
  const {text_id} = useParams();
  const todos = useSelector((state) => state.todos);
  const data = todos.filter((todo)=> todo.id == text_id)
  const {text} = data[0];
  const [updateText, setUpdateText] = useState(text);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editHandler = (e)=>{
    e.preventDefault();
    dispatch(editTodo({
      id: text_id,
      text: updateText
    }))
    navigate('/');
  }


  return (
    <div className="w-[100%] h-[80vh] flex justify-center items-center">
      <div className="w-[600px] bg-green-600 h-[200px] rounded-lg text-center">
        <form className="my-[40px]" onSubmit={editHandler}>
          <input
          value={updateText}
          onChange={(e)=>setUpdateText(e.target.value)}
            type="text"
            className=" w-[90%] py-[10px] px-[10px] rounded-md text-black text-2xl outline-none font-semibold "
          />
          <div>
            <button
              type="submit"
              className=" bg-indigo-900 font-bold text-xl my-[20px] px-[70px] py-[10px] rounded-[30px]"
            >
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTodo;
