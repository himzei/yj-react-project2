import { Text, Button } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Text fontWeight={600} color={"red.500"}>App</Text>
      <Button colorScheme='red'>Button</Button>
      <Button colorScheme='teal' variant='outline'>
        Button
      </Button>
   </>
  );
}

export default App;
