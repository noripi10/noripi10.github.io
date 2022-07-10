import { Box, Code, Divider, Flex, Grid, Heading, HStack, Image, Link, Stack, Text, VStack } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

import { AppStoreBadge } from './components/AppStoreBadge';
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
              居住
            </Heading>
            <Text>岐阜県</Text>
          </HStack>
          <HStack alignItems={'center'} pb={2}>
            <Heading fontSize={16} width={'36'}>
              趣味
            </Heading>
            <Text>漫画・アニメ・プログラミング</Text>
          </HStack>
          <HStack alignItems={'center'} pb={2}>
            <Heading fontSize={16} width={'36'}>
              休日
            </Heading>
            <VStack justifyContent='flex-start' alignItems={'flex-start'}>
              <Text>子供と遊んだり、アプリ作成したりしています</Text>
              <Text>ReactNativeが好きです</Text>
            </VStack>
          </HStack>

          <Divider my={4} />

          <HStack alignItems={'flex-start'} pb={8}>
            <Heading fontSize={16} width={'36'}>
              言語
            </Heading>
            <VStack alignItems={'flex-start'}>
              <img
                alt='TypeScript'
                src='https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=fff'
              />
              <img
                alt='JavaScript'
                src='https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=fff'
              />
              <Code color={'cyan.300'}>C#</Code>
              <Code color={'teal.300'}>VB.net</Code>
              <Code color={'orange.300'}>VBA</Code>
              <Code color={'red.300'}>SQL</Code>
              <Text>...</Text>
            </VStack>
          </HStack>

          <HStack alignItems={'flex-start'} pb={8}>
            <Heading fontSize={16} width={'36'}>
              フレームワーク等
            </Heading>
            <VStack alignItems={'flex-start'}>
              <img alt='React' src='https://img.shields.io/badge/-React-555?style=flat&logo=react' />
              <img alt='React' src='https://img.shields.io/badge/-ReactNative-555?style=flat&logo=react' />
              <img alt='Next.js' src='https://img.shields.io/badge/-Next.js-000?&style=flat&logo=next.js' />
              <img alt='Gatsby' src='https://img.shields.io/badge/-Gatsby-892099?&style=flat&logo=gatsby' />
              <img
                alt='Firebase'
                src='https://img.shields.io/badge/-Firebase-FFCA28?&style=flat&logo=firebase&logoColor=fff'
              />
              <img alt='.NET' src='https://img.shields.io/badge/-.NET-512BD4?&style=flat&logo=.net' />
              <img alt='Oracle' src='https://img.shields.io/badge/-Oracle-f80000?&style=flat&logo=oracle' />
              <img alt='jQuery' src='https://img.shields.io/badge/-jQuery-0769AD?logo=jquery&style=flat' />
              <Text>...</Text>
            </VStack>
          </HStack>

          <Heading fontSize={16} width={'36'} my={'4'}>
            アプリ一覧
          </Heading>
          <HStack alignItems={'flex-start'} pb={8}>
            <VStack alignItems={'flex-start'}>
              <Grid gap={'2'}>
                <Stack borderWidth={'0.5px'} borderRadius={'4'} padding={'4'}>
                  <Text fontWeight={'bold'}>メモリス</Text>
                  <HStack alignItems={'flex-start'}>
                    <Image
                      boxSize={'80px'}
                      borderRadius={'4'}
                      src={
                        'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/0d/0b/56/0d0b56b4-4ba9-11e2-0f1d-32df9d17c603/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp'
                      }
                    />
                    <VStack justifyContent={'flex-start'} alignItems={'flex-start'}>
                      <Text fontSize={'0.8rem'}>手書きメモを簡単に作成できるメモアプリです</Text>
                      <Text fontSize={'0.8rem'}>メモ保存は端末内のみです</Text>
                      <Text fontSize={'0.8rem'}>Cloudへの保存は不安といった場合に使えます。</Text>
                    </VStack>
                  </HStack>
                  <Box display={'flex'}>
                    <Link
                      href='https://apps.apple.com/jp/app/%E3%83%A1%E3%83%A2%E3%83%AA%E3%82%B9/id1547004806'
                      isExternal
                    >
                      <AppStoreBadge />
                    </Link>
                  </Box>
                </Stack>

                <Stack borderWidth={'0.5px'} borderRadius={'4'} padding={'4'}>
                  <Text fontWeight={'bold'}>ウェザリス</Text>
                  <HStack alignItems={'flex-start'}>
                    <Image
                      boxSize={'80px'}
                      borderRadius={'4'}
                      src={
                        'https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/10/46/14/104614ea-fbcd-1b09-6de7-51ce2a8c769e/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp'
                      }
                    />
                    <VStack justifyContent={'flex-start'} alignItems={'flex-start'}>
                      <Text fontSize={'0.8rem'}>天気予報アプリです。</Text>
                      <Text fontSize={'0.8rem'}>OpenWeatherMap APIを使用して天気予報を取得しています</Text>
                      <Text fontSize={'0.8rem'}>FirebaseAuthentication</Text>
                      <Text fontSize={'0.8rem'}>Firestoreを使用して各地点のリアルタイムチャットを実現</Text>
                    </VStack>
                  </HStack>
                  <Box display={'flex'}>
                    <Link
                      href='https://apps.apple.com/jp/app/%E3%82%A6%E3%82%A7%E3%82%B6%E3%83%AA%E3%82%B9/id1554740536'
                      isExternal
                    >
                      <AppStoreBadge />
                    </Link>
                  </Box>
                </Stack>

                <Stack borderWidth={'0.5px'} borderRadius={'4'} padding={'4'}>
                  <Text fontWeight={'bold'}>my クイズ</Text>
                  <HStack alignItems={'flex-start'}>
                    <Image
                      boxSize={'80px'}
                      borderRadius={'4'}
                      src={
                        'https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/15/92/f6/1592f64b-3cb4-c3ab-2889-28d1e5d6ed26/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp'
                      }
                    />
                    <VStack justifyContent={'flex-start'} alignItems={'flex-start'}>
                      <Text fontSize={'0.8rem'}>自作クイズアプリです。</Text>
                      <Text fontSize={'0.8rem'}>普通のクイズとは違い作成したクイズに声（ヴォイス）で回答します。</Text>
                      <Text fontSize={'0.8rem'}>モチベーションは小さい子供は４択などからの回答は難しいので、</Text>
                      <Text fontSize={'0.8rem'}>声を出してであれば回答することができると考え作成しました。</Text>
                      <Text fontSize={'0.8rem'}>実際自分の子供は楽しんでくれています！！！</Text>
                    </VStack>
                  </HStack>
                  <Box display={'flex'}>
                    <Link href='https://apps.apple.com/jp/app/my-%E3%82%AF%E3%82%A4%E3%82%BA/id1598134285' isExternal>
                      <AppStoreBadge />
                    </Link>
                  </Box>
                </Stack>

                <Stack borderWidth={'0.5px'} borderRadius={'4'} padding={'4'}>
                  <Text fontWeight={'bold'}>my-switchbot-controller</Text>
                  <HStack alignItems={'flex-start'}>
                    <Image
                      boxSize={'80px'}
                      borderRadius={'4'}
                      src={
                        'https://lh3.googleusercontent.com/CKhoZJcv-DmF0VBC_qlLINRiCIglljJyVmW4DoIZZ4yeuAMvv8_b4rahU08sytp4EekguWeL4kdjT_09tHW6GGnP=w128-h128-e365-rj-sc0x00ffffff'
                      }
                    />
                    <VStack justifyContent={'flex-start'} alignItems={'flex-start'}>
                      <Text fontSize={'0.8rem'}>Chrome 拡張機能</Text>
                      <Text fontSize={'0.8rem'}>SwithBot端末電源をChromeから操作できます。</Text>
                      <Text fontSize={'0.8rem'}>スマホアプリからいつも操作していた(起動するのが手間...)のですが、</Text>
                      <Text fontSize={'0.8rem'}>自分は電源ON・OFFくらいしか普段使わないので、自作しました。</Text>
                      <Text fontSize={'0.8rem'}>基本Chromeは起動しているのですごく操作が楽になりました。</Text>
                    </VStack>
                  </HStack>
                  <Box
                    display={'flex'}
                    flexDir={'row'}
                    width={'36'}
                    height={'12'}
                    borderRadius={'4'}
                    borderWidth={'thin'}
                    borderColor={'#ddd'}
                    backgroundColor='#000'
                    justifyContent={'flex-start'}
                    alignItems={'center'}
                    px={'2'}
                  >
                    <Link
                      href='https://chrome.google.com/webstore/detail/my-switchbot-controler/ajhnghbfoleadocfplnfkfnkcbcamehl'
                      isExternal
                    >
                      <HStack>
                        <Box pr={'2'}>
                          <FcGoogle size={32} />
                        </Box>
                        <Text fontSize={'12'}>Chrome WebStore</Text>
                      </HStack>
                    </Link>
                  </Box>
                </Stack>
              </Grid>
            </VStack>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
