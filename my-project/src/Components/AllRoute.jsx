import {Route, Routes} from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home/Home"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Login/Signup"
import Support from "../Pages/Support"



function AllRoute(){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/support" element={<Support/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
    )

}

export default AllRoute