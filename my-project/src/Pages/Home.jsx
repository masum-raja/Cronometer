import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import {Container} from '@chakra-ui/react'
import Styles from "./Home.module.css"

function Home(){
    return(
        <div>
            <Navbar/>
            <Container maxW="100%">
                <div className={Styles.main}>
                    <div>
                        <img src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg" alt="image" />
                    </div>
                    <div>

                    </div>
                </div>

            </Container>
            <Footer/>
        </div>
    )

}

export default Home;