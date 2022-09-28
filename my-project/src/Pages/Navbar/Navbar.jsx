import { Box,HStack,Image, Menu, MenuButton, MenuList,MenuItem, Button, Container, Link,} from '@chakra-ui/react'

function Navbar(){
    const hoverStyle={
        color:"#ff763f",
        cursor:"pointer",
    }

    return(
        <Container maxW='100%' h="100px"
         display="flex" alignItems='center' justifyContent="space-around">

            <Box >
                <Image w="250px" src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="logo"/>
            </Box>
            <Box>
                <HStack display="flex" gap="8">
                    <Box _hover={hoverStyle}>
                        <Menu >
                            <MenuButton >
                                <Link to="/producrs">Products</Link>
                            </MenuButton>
                            <MenuList>
                            <MenuItem>Cronometer</MenuItem>
                            <MenuItem>Cronometer Pro</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                    <Box _hover={hoverStyle}><Link to="/support">Support</Link></Box>
                    <Box _hover={hoverStyle}><Link to="/blog">Blog</Link></Box>
                    <Box _hover={hoverStyle}><Link to="/forums">Forums</Link></Box>
                    <Box _hover={hoverStyle}> <Link to="about">About</Link></Box>
                    <Box _hover={hoverStyle}><Button w="120px" bg="White" border="1.5px solid #ff763f" color="#ff763f">Log In</Button></Box>
                </HStack>
            </Box>
        </Container>
    )

}
 
export default Navbar;