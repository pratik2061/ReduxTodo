import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addTodo } from "../slicefeatures/todoSlice";
import { useState } from "react";

function AddTodo() {
  const [data,setData] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const addHandler = (e)=>{
    e.preventDefault()
    dispatch(addTodo(data))
    setData("")
    navigate('/')
  }
  return (
    <div className="w-[100%] h-[80vh] flex justify-center items-center">
      <div className="w-[600px] bg-green-600 h-[200px] rounded-lg text-center">
        <form className="my-[40px]" onSubmit={addHandler}>
          <input
          value={data}
          onChange={(e)=>setData(e.target.value)}
            type="text"
            placeholder="Enter todo..."
            className=" w-[90%] py-[10px] px-[10px] rounded-md text-black text-2xl outline-none font-semibold "
          />
          <div>
            <button type="submit" className=" bg-indigo-900 font-bold text-xl my-[20px] px-[70px] py-[10px] rounded-[30px]">ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodo