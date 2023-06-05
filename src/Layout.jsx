import { Text, Box, VStack, HStack } from "@chakra-ui/react";
import {
  AiFillApple,
  AiFillHome,
  AiFillProfile,
  AiFillContacts,
} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const GNB = [
  {title: "홈", href: "/", icon: AiFillHome},
  {title: "프로필", href: "/profile", icon: AiFillProfile},
  {title: "연락처", href: "/contact", icon: AiFillContacts}
]

export default function Layout({ children }) {
  const location = useLocation();
  console.log(location.pathname);
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
          {children}

          {/* tail */}
          <Box w="inherit" h="120px" bg="gray.800" position="fixed" bottom={0}>
            <HStack
              h="inherit"
              justifyContent="space-between"
              alignItems="center"
              color="white"
            >
              {GNB.map((item) => (
                <Box w="full">
                  <Link to={item.href}>
                    <VStack w="full">            
                      <item.icon size={24}  />
                      <Text color={location.pathname === item.href ? "red.600" : "white"}>{item.title}</Text>
                    </VStack>
                  </Link>
              </Box>)
              )}
                           
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
