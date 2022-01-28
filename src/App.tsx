import { Box, Code, Divider, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { SidebarWithHeader } from './components/SidebarWithHeader';

function App() {
  return (
    <Box minH={'100vh'}>
      <SidebarWithHeader />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        <Flex p={4} flexDir={'column'}>
          <HStack alignItems={'center'} pb={2}>
            <Heading fontSize={16} width={'36'}>
              名前
            </Heading>
            <Text>noripi10 (のりぴ)</Text>
          </HStack>
          <HStack alignItems={'center'} pb={2}>
            <Heading fontSize={16} width={'36'}>
              移住地
            </Heading>
            <Text>岐阜県</Text>
          </HStack>
          <HStack alignItems={'center'} pb={2}>
            <Heading fontSize={16} width={'36'}>
              趣味
            </Heading>
            <Text>漫画・アニメ鑑賞</Text>
          </HStack>
          <HStack alignItems={'center'} pb={2}>
            <Heading fontSize={16} width={'36'}>
              休日の過ごし方
            </Heading>
            <Text>子供と遊びながら、フロントエンドを中心に活動中</Text>
          </HStack>

          <Divider my={4} />

          <HStack alignItems={'flex-start'} pb={8}>
            <Heading fontSize={16} width={'36'}>
              language
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Code color={'yellow.300'}>JavaScript</Code>
              <Code color={'blue.300'}>TypeScript</Code>
              <Code color={'cyan.300'}>C#</Code>
              <Code color={'teal.300'}>VB.net</Code>
              <Code color={'orange.300'}>VBA</Code>
              <Code color={'red.300'}>SQL</Code>
            </VStack>
          </HStack>

          <HStack alignItems={'flex-start'} pb={8}>
            <Heading fontSize={16} width={'36'}>
              framework
            </Heading>
            <VStack alignItems={'flex-start'}>
              <Code color={'green.300'}>React</Code>
              <Code color={'green.300'}>React Native</Code>
              <Code color={'green.300'}>Next.js</Code>
              <Code color={'green.300'}>Gatsby.js</Code>
              <Code color={'green.300'}>Firebase</Code>
              <Code color={'green.300'}>.NET</Code>
              <Code color={'green.300'}>Asp.Net (Core)</Code>
              <Code color={'green.300'}>Oracle</Code>
            </VStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
