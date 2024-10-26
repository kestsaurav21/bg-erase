import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit'
import NavBar from './components/NavBar';


function App() {

  return (
    <div className='bg-[#f7fbff]'>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/result' element={<Result />} />
            <Route path='/buy' element={<BuyCredit />} />
        </Routes>
    </div>
  )
}

export default App
