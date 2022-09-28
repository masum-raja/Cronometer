import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import {Box, Button, Container, Link} from '@chakra-ui/react'
import Styles from "./Home.module.css"

function Home(){
    return(
        <div>
            <Navbar/>
            <Container maxW="100%">
            </Container>
            <Footer/>
        </div>
    )

}

export default Home;