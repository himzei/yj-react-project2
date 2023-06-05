import { Box, VStack, Image, Text } from "@chakra-ui/react";
import Layout from "./Layout";
import KakaoMap from "./KakaoMap";

export default function Detail(){
    return (
        <Layout canGoBack title="디테일 페이지">
            <VStack py="110px" bg="gray.800" w="full" spacing={8}>
                <Box>
                    <Image src="https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                </Box>    
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontSize={20} fontWeight={700}>대구 스파벨리</Text>  
                    <Text color="white">대구 최고의 여름 테마파크</Text>
                </VStack>  
                <Box w="95%" h="2px" bg="gray.700" />
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontWeight={600}>운영시간</Text>  
                    <Text color="white" fontSize={14}>10:00 ~ 17:00</Text>
                </VStack>  
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontWeight={600}>입장인원</Text>  
                    <Text color="white" fontSize={14}>120명</Text>
                </VStack>  
                <VStack w="full" alignItems={"flex-start"} px={4} spacing={1}>
                    <Text color="white" fontWeight={600}>이용요금</Text>  
                    <Text color="white" fontSize={14}>20,000원</Text>
                </VStack>  
                {/* 카카오 지도 */}
                <KakaoMap />
            </VStack>
        </Layout>
    )
}