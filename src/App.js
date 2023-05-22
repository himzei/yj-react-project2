import { Text, Box, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import {
  AiFillApple,
  AiFillHome,
  AiFillProfile,
  AiFillContacts,
} from "react-icons/ai";

function App() {
  return (
    <>
      <Box w="full" display="flex" justifyContent={"center"}>
        <VStack w="sm">
          {/* 헤더 */}
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w="inherit"
            h="120px"
            bg="gray.800"
            position="fixed"
            top={0}
            zIndex={9}
          >
            <AiFillApple size={32} color="white" />
          </Box>

          {/* 본문 */}

          {/* tail */}
          <Box w="inherit" h="120px" bg="gray.800" position="fixed" bottom={0}>
            <HStack
              h="inherit"
              justifyContent="space-between"
              alignItems="center"
              color="white"
            >
              <VStack w="full">
                <AiFillHome />
                <Text>홈</Text>
              </VStack>

              <VStack w="full">
                <AiFillProfile />
                <Text>프로필</Text>
              </VStack>

              <VStack w="full">
                <AiFillContacts />
                <Text>연락처</Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default App;
