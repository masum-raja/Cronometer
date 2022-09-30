import {Box, Button, Checkbox, Container,Image, Input, Stack,Text} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Checkbox2 from "./Checkbox";
import { Catalogues } from "./mock";


let initState={
    email:"",
    password:"",
    password1:"",
    male:false,
    female:false,
    day:"",
    month:"",
    year:"",
    feet:"",
    inch:"",
    cm:"",
    weight:"",
    unit:"",
}

function Signup(){
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);
    const[formData , setFormData]=useState(initState);


// .....Checked.........
useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map(li => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };


  const catalog = list.map(({ id, name }) => {
    return (
      <div style={{display:"flex" , textAlign:"left",gap:"10px"} }>
        <Checkbox2
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </div>
    );
  });

// .......................................................



    const handleChange=(e)=>{
        let value=e.target.value;
        setFormData({...formData,[e.target.name]:value})
    }

    const handleSubmit=()=>{
        console.log(formData)
    }

    return (
        <>
        <Container maxW="100%" >
            <Box w="100%" bg="#ffffff" p="10px" boxShadow="0px 3px 6px #00000026" >
               <Link to="/"><Image w="300px" m="auto" src="https://cdn1.cronometer.com/2020/landing/cronometer-logo.png" /></Link>
            </Box>

            <Box mt="50px" fontSize="2em" fontWeight="600" >
                Create Your Free Account
            </Box>
        </Container>

        <Box maxW="500px" m="auto" mt="50px" p="30px" border="1px solid #eee" borderRadius="10px" bg="#fefefe" >
            <Stack spacing="15px" mt="30px">
            <Input type="email" placeholder='Email Address' size='md' name="email" value={formData.email} onChange={handleChange} />
            <Input type="password" placeholder='Password' size='md' name="password" value={formData.password} onChange={handleChange}/>
            <Input type="text" placeholder='Confirm Password' size='md' name="password1" value={formData.password1} onChange={handleChange}/>
        </Stack>
        </Box>

        <Box  maxW="500px" m="auto" mt="40px" p="50px" border="1px solid #eee" borderRadius="10px" bg="#fefefe" >
            <Text mb="10px" color="#333" fontWeight="bold" fontSize="1.5em" >Your Body Type</Text>
            <label>Sex: 
                <Checkbox  ml="10px" colorScheme='red' border="#FF763F" value="male"  onChange={handleChange} >Male</Checkbox>
                <Checkbox ml="10px" border="#FF763F" colorScheme='red' value='female' onChange={handleChange}>Female</Checkbox>
            </label>
            <br />
            <label>Born: 
                <Input mt="10px" p="1px 2px" size='xs' w="35px" ml="10px" h="25px" type="number" placeholder="31" mr="10px" name="day" value={formData.day} onChange={handleChange} />
                <select name="month" value={formData.month} onChange={handleChange} >
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="deember">December</option>
                </select>

                <Input p="1px 2px" size='xs' w="65px" ml="10px" h="25px" placeholder="1997" mr="10px" borer="black" name="year" value={formData.year} onChange={handleChange}/>
                </label>
                <br />
                <label >Heights:
                    <select name="feet" value={formData.feet} onChange={handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected="selected">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    '
                    <select name="inch" value={formData.inch} onChange={handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected="selected">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                    </select>
                    ""
                    /

                    <Input w="80px" h="22px" ml="10px" mr="10px" mt="10px" placeholder="165" name="cm" value={formData.cm} onChange={handleChange}/>cm
                </label>
                <br />
                <label>Weight:
                    <Input w="90px" h="22px" ml="10px" mr="10px" mt="10px" placeholder="150" name="weight"  value={formData.weight} onChange={handleChange}/>
                    <select name="unit" value={formData.unit} onChange={handleChange}>
                        <option value="pounds">Pounds</option>
                        <option value="kilograms">Kilograms</option>
                    </select>
                </label>
                
        </Box>

        <Box maxW="500px" m="auto" mt="50px" p="30px" border="1px solid #eee" borderRadius="10px" bg="#fefefe" >
            <Text fontSize="1.5em" color="#333">Terms of Service & Privacy Settings</Text>
            <Box mt="20px" fontSize="14px">
                <Box display="flex" gap="20px">
                    <Checkbox2
                        type="checkbox"
                        name="selectAll"
                        id="selectAll"
                        handleClick={handleSelectAll}
                        isChecked={isCheckAll}
                    />
                Check All
                </Box>
                    {catalog}
            </Box>
        </Box>

        <Button w="500px" mt="20px" mb="20px" bg="#67AC5B" color="white" disabled={!isCheckAll}  onClick={handleSubmit} >Create Account</Button>
        
        </>
    )
}

export default Signup;



