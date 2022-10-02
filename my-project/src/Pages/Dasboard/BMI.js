import { Box } from "@chakra-ui/react"

let getData=JSON.parse(localStorage.getItem("data"))

function BMI(){
    let weight=getData.weight
    let feet=getData.feet
    let inch=getData.inch
    let cm=getData.cm

    let res = weight/(cm*cm)*10000;
    let finalRes=res.toFixed(1);

    let msg=""
    if(finalRes<= 18.4){
        msg+="Under Weight"
    }else if(finalRes >= 18.5 && finalRes<= 24.9 ){
        msg+="Normal Weight"
    }else if(finalRes >= 25 && finalRes <=29.9){
        msg+="Over Weight"
    }else if (finalRes >= 30){
        msg+= ("Obese")
    }



    return(
        <Box mt="20px" textAlign="left" fontWeight="600">
            <Box mt="10px">BMI:- {finalRes}</Box>
            <Box mt="10px">Category:- {msg}</Box>
        </Box>
    )

}

export default BMI;