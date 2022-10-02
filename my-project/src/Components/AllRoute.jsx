import {Route, Routes} from "react-router-dom"
import About from "../Pages/About/About"
import DashBoard from "../Pages/Dasboard/Dashboard"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"



function AllRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashBoard" element={<DashBoard/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    )

}

export default AllRoute