import {Box, Button, Container, Image,Input, Stack,Text} from "@chakra-ui/react"
import { useState } from "react";
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer";


let initState={
    email:"",
    password:"",
}

function Login(){
    const [formData,setFormData]=useState(initState)

    const handleChange=(e)=>{
        let value=e.target.value;
        setFormData({...formData,[e.target.name]:value})
    }

    const handleSubmit=()=>{
        console.log(formData)
    }

    return(
        <>
        <Container maxW="100%" m="auto">
            <Box maxW="500px" m="auto" p="30px" mt="20px" border="1px solid #eee" borderRadius="10px" >
                <Box>
                <Link to="/"> <Image w="300px" m="auto" src="https://cdn1.cronometer.com/logos/cronometer-logo-orange.png"/></Link>
                </Box>
                <Stack spacing="15px" mt="30px">
                <Input type="email" placeholder='Email Address' size='md' onChange={handleChange} name="email" value={formData.email}  />
                <Input type="password" placeholder='Password' size='md' onChange={handleChange} name="password" value={formData.password}/>
                <Button onClick={handleSubmit}>LogIn</Button>
                </Stack>
                <Box mt="20px" display="flex" justifyContent="space-between" >
                    <Box>Not a member? <Link color="#ff763f" to="/signup">Sign Up Now</Link></Box>
                    <Box color="#ff763f"><Link  >Forgot Password?</Link></Box>
                </Box>
            </Box>

            <Box w="50%" m="auto" mt="150px" mb="20px" display="flex">
                <Text>Blog</Text>
                <Box bg="#FF763F" borderRadius="50%" h="6px" w="6px" m="auto"></Box>
                <Text>Forums</Text>
                <Box bg="#FF763F" borderRadius="50%" h="6px" w="6px" m="auto"></Box>
                <Text>Privacy</Text>
                <Box bg="#FF763F" borderRadius="50%" h="6px" w="6px" m="auto"></Box>
                <Text>Terms</Text>
                <Box bg="#FF763F" borderRadius="50%" h="6px" w="6px" m="auto"></Box>
                <Text>Affiliates</Text>
                <Box bg="#FF763F" borderRadius="50%" h="6px" w="6px" m="auto"></Box>
                <Text>Jobs</Text>
            </Box>
        </Container>
        <Footer/>
        </>
    )
}

export default Login;