import { Text, Box, VStack, HStack, Grid, GridItem } from "@chakra-ui/react";
import {
  AiFillApple,
  AiFillHome,
  AiFillProfile,
  AiFillContacts,
} from "react-icons/ai";

const BOX_CSS = "";

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
          >
            <AiFillApple size={32} color="white" />
          </Box>

          {/* 본문 */}
          <VStack w="inherit" py="140px" px={4} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={24}>
              최신상품
            </Text>
            <Grid gap={2} gridTemplateColumns={"repeat(2, 1fr)"} w="full">
              <GridItem
                h="200px"
                border={"1px"}
                rounded={"md"}
                borderColor="gray.300"
                backgroundImage="url('https://images.unsplash.com/photo-1684516310710-463141e44242?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80')"
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                position="relative"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  bgGradient="linear(to-b, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))"
                >
                  <Text
                    color="white"
                    position="absolute"
                    w="full"
                    bottom="0"
                    align="center"
                    fontWeight={600}
                    py={4}
                  >
                    팔공산 투어
                  </Text>
                </Box>
              </GridItem>
              <GridItem
                h="200px"
                border={"1px"}
                rounded={"md"}
                borderColor="gray.300"
                backgroundImage="url('https://plus.unsplash.com/premium_photo-1683299266036-9e9b6c9d9152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                position="relative"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  bgGradient="linear(to-b, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))"
                >
                  <Text
                    color="white"
                    position="absolute"
                    w="full"
                    bottom="0"
                    align="center"
                    fontWeight={600}
                    py={4}
                  >
                    지리산 투어
                  </Text>
                </Box>
              </GridItem>

              <GridItem
                h="200px"
                border={"1px"}
                rounded={"md"}
                borderColor="gray.300"
                backgroundImage="url('https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                position="relative"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  bgGradient="linear(to-b, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))"
                >
                  <Text
                    color="white"
                    position="absolute"
                    w="full"
                    bottom="0"
                    align="center"
                    fontWeight={600}
                    py={4}
                  >
                    앞산 투어
                  </Text>
                </Box>
              </GridItem>

              <GridItem
                h="200px"
                border={"1px"}
                rounded={"md"}
                borderColor="gray.300"
                backgroundImage="url('https://images.unsplash.com/photo-1682686581220-689c34afb6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                position="relative"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  w="full"
                  h="full"
                  bgGradient="linear(to-b, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))"
                >
                  <Text
                    color="white"
                    position="absolute"
                    w="full"
                    bottom="0"
                    align="center"
                    fontWeight={600}
                    py={4}
                  >
                    뒷산 투어
                  </Text>
                </Box>
              </GridItem>
            </Grid>
          </VStack>

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
