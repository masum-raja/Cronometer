import {Box, Button,Heading,FormLabel, FormControl, Select,option, Input} from "@chakra-ui/react"
import { useState} from "react"
import BMI from "./BMI";
import DasNav from "./DasNav"


const initialState = {
    age: "",
    gender: "male",
    weight: "",
    height:"",
    activity:"sedentary",
    goal:"reduction"
};


function DashBoard() {
    const [data,setData]=useState([])
    const [formData,setFormData]=useState(initialState);

    const handleChange=(e)=>{
        let value=e.target.value;
        setFormData({...formData,[e.target.name]:value})
      }

      

      const handleSubmit=(e)=>{
        e.preventDefault()
        setData(formData);
      }

      let height = data.height
      let weight= data.weight;
      let gender= data.gender;
      let age= data.age;

      let res=gender==="male"?66.5+(13.75*weight)+(5.003*height)-(6.75*age):655.1+(9.563*weight)+(1.850*height)-(4.676*age)
      res=res.toFixed(1)
     

// const calculate = require('fitness-health-calculations');

// let totalCaloricNeeds = calculate.caloricNeeds( data.gender!==undefined?data.gender:"male", data.age!==undefined?data.age:0, data.height!==undefined?data.height:0, data.weight!==undefined?data.weight:0, data.activity!==undefined?data.activity:"sedentary", data.goal!==undefined?data.goal:"reduction");



    return(
        <Box  maxW="100%">
             <DasNav/>
             
                <Box w="80%" m="auto" display="flex" justifyContent="space-between" >
                    <Box p="15px" h="200px"  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;" >
                        <Heading color="#E65F29" >Your Details</Heading>
                        <BMI/>
                        <Box mt="10px" textAlign="left" fontWeight="600">Your Daily Calories:- {isNaN(res)?0:res} Kcal/day</Box>
                    </Box>
                    <Box>

                        <Heading color="#E65F29">Fitness and Health Calculations</Heading>
                    
                    <Box  w="80%" m="auto" mt="30px" boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;" p="20px">
                    <Heading>Calculating Your Daily Calories</Heading>

                <form  onSubmit={handleSubmit} >
                <FormControl>
                    <FormLabel mt="15px">Gender </FormLabel>
                    <Select name="gender" value={formData.gender} onChange={handleChange}>
                        <option>male</option>
                        <option>female</option>
                    </Select>

                    <FormLabel mt="15px">Age</FormLabel>
                    <Input type="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange}/>

                    <FormLabel mt="15px">Height</FormLabel>
                    <Input type="number" name="height" placeholder="Height in cm" value={formData.height} onChange={handleChange}/>

                    <FormLabel mt="15px">Weight</FormLabel>
                    <Input type="number" name="weight" placeholder="weight in kg" value={formData.weight} onChange={handleChange}/>

                    <FormLabel mt="15px">Activity Level</FormLabel>
                    <Select name="activity"  value={formData.activity} onChange={handleChange}>
                        <option >sedentary</option>
                        <option>light</option>
                        <option >moderate</option>
                        <option >high</option>
                        <option >extreme</option>
                    </Select>

                    <FormLabel mt="15px">Goal</FormLabel>
                    <Select name="goal"  value={formData.goal} onChange={handleChange}>
                        <option >reduction</option>
                        <option>maintain</option>
                        <option >gain</option>
                    </Select>
                    </FormControl>
                    <Button w="370px" mt="20px" bg="#e65f29" color="white" _hover="none" type="submit"  >SUBMIT</Button>
                    </form>
                    
                            </Box>
                        </Box>
                </Box>
        </Box>
    )

}

export default DashBoard;

