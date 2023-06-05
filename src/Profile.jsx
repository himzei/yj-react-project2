import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack as="form" bg="gray.400" minH="100vh" py="140px" w="full" px={4} spacing={6}>
        <VStack spacing={6}>
          <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
          size="xl" color="black" bg="white" name='조현일' />
          <VStack spacing={0}>
            <Text fontSize={20} fontWeight={600}>조현일</Text>
            <Text fontSize={14}>풀스택 개발자를 꿈꾸는 조현일</Text>
          </VStack>
          <HStack w="80%" spacing="4">
            <Box 
              border="2px" rounded="xl" 
              px="20px" fontSize="14" 
              py="1" w="140px" align="center" 
              color="purple.600"
              textTransform={"uppercase"}
              fontWeitht={700}>
                Contact
          </Box>
            <Box 
              border="2px" rounded="xl" 
              px="20px" fontSize="14" 
              py="1" w="140px" align="center" 
              color="red.600"
              textTransform={"uppercase"}
              fontWeitht={700}>
                Follow
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
}
