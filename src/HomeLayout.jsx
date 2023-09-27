import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function HomeLayout() {
  return (
    <section  className='align-elements'>
    <Navbar/>
    <main><Outlet/></main>

    </section>
  )
}

export default HomeLayout