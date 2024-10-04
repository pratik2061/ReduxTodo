import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function Layouts() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layouts