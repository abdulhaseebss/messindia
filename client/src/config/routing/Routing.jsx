import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../screen/home/Home'
import SignIn from '../../screen/sign-in/SignIn'
import SignUp from '../../screen/sign-up/SignUp'

import Dashboard from '../../screen/Dashboard/Dashboard'
import Dashboard2 from '../../screen/Dashboard/Dashboard2'

 
import Payment from '../../screen/payment/PaymentMethod'

import Home2 from '../../screen/home2/Home2'


const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/home' element={<Home/>}/>

            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Dashboard2' element={<Dashboard2/>}/>

            <Route path='/payment' element={<Payment/>}/>
            <Route path='/home2' element={<Home2/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default Routing