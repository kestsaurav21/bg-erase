import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <div className='bg-[#f7fbff]'>

        <ToastContainer position='bottom-right'/>
        <NavBar />
     
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/result' element={<Result />} />
            <Route path='/buy' element={<BuyCredit />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
