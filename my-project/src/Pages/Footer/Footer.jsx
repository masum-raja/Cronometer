import { Box,Image,Container,Text, Heading } from "@chakra-ui/react";

function Footer(){
    
    const hoverStyle={
        color:"#ff763f",
        cursor:"pointer"
    }

    return(
        <Container maxW="100%" h="600px" bg="#4f4e53" p="50px">
            <Box w="20%" h="40px" m="auto" display="flex" gap="5">
                <Image src="https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png"/>
                <Image src="https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png"/>
                <Image src="https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png"/>
                <Image src="https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png"/>
            </Box>
            <Box display="flex" w="30%" h="48px" m="auto" mt="30px" mb="50px" gap="5"> 
                <Image src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg"/>
                <Image src="https://cdn1.cronometer.com/2021/landing/android-icon.svg"/>
            </Box>

            <hr/>
            
            <Box display="flex" mt="20px" justifyContent="space-around" lineHeight="2.5rem" color="white">
                <Box>
                    <Image w="200px" src="https://cdn1.cronometer.com/2021/landing/crono-logo-white.svg"/>
                </Box>
                <Box>
                    <Heading _hover={hoverStyle} fontSize="25px">Cronometer</Heading>
                    <Text _hover={hoverStyle} >For Individuals</Text>
                    <Text _hover={hoverStyle}>For Professionals</Text>
                    <Text _hover={hoverStyle}>Privacy</Text>
                    <Text _hover={hoverStyle}>Terms</Text>
                </Box>
                <Box>
                    <Heading _hover={hoverStyle} fontSize="25px">The Company</Heading>
                    <Text _hover={hoverStyle}>About Us</Text>
                    <Text _hover={hoverStyle}>Crono Blog</Text>
                    <Text _hover={hoverStyle}>Crono Forums</Text>
                    <Text _hover={hoverStyle}>Jobs</Text>
                    <Text _hover={hoverStyle}>Support</Text>
                </Box>
                <Box>
                    <Heading _hover={hoverStyle} fontSize="25px">Partners & Affiliates</Heading>
                    <Text _hover={hoverStyle}>Affilate Program</Text>
                    <Text _hover={hoverStyle}>Media Kit</Text>
                </Box>
            </Box>
            <Box w="20%" m="auto" color="white" fontWeight="600" mt="30px">
                <Box>Copyright © 2011-2022</Box>
                <Box>All rights reserved</Box>
            </Box>
        </Container>
    )
}

export default Footer;