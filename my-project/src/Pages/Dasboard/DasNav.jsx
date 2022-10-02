import {Box,Image,Menu,MenuButton,MenuList,MenuItem,Button,Text,Tabs,TabPanel,TabPanels,TabList,Tab} from "@chakra-ui/react"
import { useEffect, useState} from "react"
import { Link } from "react-router-dom"


let getData=JSON.parse(localStorage.getItem("data"))


function DasNav(){
const [data,setData]=useState([])

useEffect(()=>{
    setData([getData]);
},[])

return(
    <Box w="100%" display="flex" gap="200px" mb="30px"  boxShadow="0 3px 25px #eee" p="10px">
        <Box bg="white">
            <Menu >
                <MenuButton as={Button}>
                    <Image w="200px" src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg"/>
                </MenuButton>

                <MenuList display="grid" gridTemplateColumns="repeat(2,1fr)" p="20px"  gap="50px" boxShadow="0 3px 25px #eee">
                    <Box>
                    {data.map((ele)=>(
                    <Box fontWeight="600" color="#E65F29"  textAlign="centre" w="300px" id={ele.email}> 
                    <Text>Signed in as: {ele.email}</Text>
                    </Box>
                    ))}
                    </Box>
                    <Box><Link to="/"><Button border="1px solid #E65F29" bg="white" color="#E65F29" w="130px"> Log Out</Button></Link></Box>
                    <Box bg="#fbfbfa" boxShadow="0 3px 25px #eee" p="20px">
                    <MenuItem>
                    Gold <span style={{marginLeft:"150px",borderBottom:"1px solid green"}}>$49.99/year
                    </span></MenuItem>
                    <Text w="300px" mt="20px" lineHeight="1.6em" textAlign="left">Our Premium features like TimeStamps and Food Suggestion will help you plan, customize and share your perfecr diet.</Text>
                    </Box>

                    <Box bg="#fbfbfa" boxShadow="0 3px 25px #eee" p="20px">
                    <MenuItem>Professional  <span style={{marginLeft:"80px",borderBottom:"1px solid green"}}>$29.95/mo</span></MenuItem>
                    <Text w="300px" mt="20px" lineHeight="1.6em" textAlign="left">Are you a Coach, Trainer or Healthcare Professional that belives diet is a critical component to health and fitness? Learn how you can monitor clients'nutrition in real-time with Cronometer Pro.</Text>
                    </Box>
                </MenuList>
            </Menu>
        </Box>
        
        <Box color="#E65F29">
        <Tabs>
            <TabList>
                <Tab>Diary</Tab>
                <Tab>Trends</Tab>
                <Tab>Food</Tab>
                <Tab>Setting</Tab>
                <Tab>Plans</Tab>
                <Tab>Help</Tab>
            </TabList>
{/* 
            <TabPanels>
                <TabPanel>
                <p>Diary!</p>
                </TabPanel>
                <TabPanel>
                <p>Trends!</p>
                </TabPanel>
                <TabPanel>
                <p>Food!</p>
                </TabPanel>
                <TabPanel>
                <p>Setting!</p>
                </TabPanel>
                <TabPanel>
                <p>Plans!</p>
                </TabPanel>
                <TabPanel>
                <p>Help!</p>
                </TabPanel>
            </TabPanels> */}
        </Tabs>
        </Box>

    </Box>
)
    

}

export default DasNav;