import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {Box, Container,Button, Heading,Text,Image} from "@chakra-ui/react"

function About(){
    return(
        <>
        <Navbar/>
        <Container maxW="100%">
            
            <Box w="80%" m="auto" mt="10px" borderTop="1px solid grey">
            </Box>

            <Box w="85%" m="auto" mt="50px"  >
                <Heading color="#ff763f" fontSize="1.41em" letterSpacing="2px" fontWeight="700" >CRONOMETER</Heading>
                <Heading color="#4f4e53" fontSize="2.74em"  fontWeight="500" mt="10px">About the Company</Heading>
                <Box mt="20px" color="#404040" fontSize="1.125em" lineHeight="1.5em"  textAlign="left">
                    <Text mt="18px">Cronometer is the most accurate, comprehensive nutrition tracking app on earth. Unlike other apps on the market, our nutritional data is curated from verified, accurate sources. We aim to provide a complete solution – no matter what diet you choose to be on.</Text>
                    <Text mt="18px">Our CEO, Aaron Davidson, built Cronometer as a side project in 2005. He was following the CRON diet (Calorie Restriction with Optimal Nutrition) and being the nutrition nerd/software developer that he is, decided to build an app to track his diet. Thus, Cronometer was born. It was several years later before he came to the conclusion that maybe he was onto something and quit his six-figure corporate job to focus on improving Cronometer.</Text>
                    <Text mt="18px">There are now over 5 million users who are happy he did.</Text>
                    <Text mt="18px">Cronometer's success has hinged entirely on positive word-of-mouth from its users. The company is still – and plans to continue being – a bootstrap startup to this day.</Text>
                </Box>
            </Box>

            <Box >
                <Image w="85%" m="auto" mt="35px" src="https://cdn1.cronometer.com/2021/landing/cronometer-staff-3-p-1600.jpeg" alt="image"/>
            </Box>

            <Box w="85%" m="auto" mt="50px">
                <Heading color="#ff763f" fontSize="1.41em" letterSpacing="2px" fontWeight="700">CRONOMETER</Heading>
                <Heading color="#4f4e53" fontSize="2.74em"  fontWeight="500" mt="10px">Who We Are</Heading>
                <Box mt="20px" color="#404040" fontSize="1.125em" lineHeight="1.5em"  textAlign="left">
                    <Text mt="18px">While our staff spans the globe our headquarters is based in the small-town of Revelstoke, British Columbia, Canada. Revelstoke is a health-centric mountain town brimming with endless options for staying active and a growing tech community – the perfect combination to call home.</Text>
                    <Text mt="18px">We are an eclectic mix of web developers, designers, nutrition scientists, business majors and personal trainers brought together by a love of nutrition. While our company has grown our mission and values have remained the same; we believe full spectrum nutrition is the best way to understand your diet’s effect on your health. We also believe in empowering everyone by ensuring they have access to accurate and comprehensive data to make informed decisions.</Text>
                    <Text mt="18px">Our goal is to build the best software for people and professionals to manage their nutrition. And we have the passion to make that happen; amazing data paired with awesome customer support truly are the Cronometer difference.</Text>
                    <Text mt="18px">If you have interest in your personal nutrition or working with your client’s nutrition check us out!</Text>
                    <Text mt="18px">Have questions? We would love to hear from you. Email us at: support@cronometer.com</Text>
                </Box>
            </Box>

            <Box w="85%" m="auto" mt="50px" borderTop="1px solid grey">
            </Box>

            <Box>
                <Text color="#4f4e53" fontSize="1.41em"  fontWeight="400" mt="50px">Help us spread the good word about nutrition and become an affiliate.</Text>
                <Button mt="50px" mb="40px" color="#ff763f" p="2% 6%" bg="#fff" boxShadow="1px 1px 10px 0 rgb(0 0 0 / 15%)" border="1px solid #ff763f">Become an Affiliate</Button>
            </Box>
        </Container>
        <Footer/>
        </>
    )

}

export default About;