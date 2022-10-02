import {Button, useToast} from "@chakra-ui/react"

function ToastExample() {
    const toast = useToast()
    return (
        <>
       
      {/* <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button> */}

      {
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
      }
            </>
    )
  }

  export default ToastExample;