import logo from './images.jpeg'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="border-b-4 py-[5px] px-[30px] flex items-center relative mb-[15px]">
      <Link className=" flex items-center" to={"/"}>
        <img src={logo} width={80} height={200} alt="todo logo" />
        <span className="font-bold text-2xl">TODO</span>
      </Link>
      <Link to={'create'} className="hover:cursor-pointer hover:bg-orange-600 absolute right-[142px] bg-orange-700 px-[20px] py-[5px] rounded-lg font-bold text-xl">
          + CREATE
      </Link>
    </div>
  );
}
