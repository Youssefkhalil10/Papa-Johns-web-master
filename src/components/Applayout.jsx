import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ScrollTop from '../routes/ScrollTop'

export default function Applayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header/>

        <main className="flex-grow p-4 min-h-screen">
          <ScrollTop/>
        <Outlet />
      </main>

        <Footer/>
      </div>
    </>
  )
}
