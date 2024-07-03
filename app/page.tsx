"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Heading, Flex, Center, Button } from '@chakra-ui/react'
import { useRouter } from "next/navigation";

import NextLogo from "@/app/assets/next.svg";

export default function Home() {
  const router = useRouter();
  return (
    <main className="">
      <Center>
        <Heading size="2xl" className="text-black mt-10">Test NextJS App</Heading>
      </Center>
      <Center>
        <Heading className="text-black mt-3">NextJSの様々な機能を活用したサンプルアプリ</Heading>
      </Center>
      <Center>
        <Card width={1000} className="mt-5">
          <CardBody>
            <Flex className="mt-3">
              <Heading>最適化された画像</Heading>
              <Image src={NextLogo.src} alt="Vercel Logo" className="ml-5" width={120} height={16} />
            </Flex>
            <Flex className="mt-3">
              <Heading>APIルート</Heading>
              <Button colorScheme="blue" className="ml-5" onClick={() => router.push("/api/hello")}>Go</Button>
            </Flex>
            <Flex className="mt-3">
              <Heading>ダイナミックルーティング</Heading>
              <Button colorScheme="blue" className="ml-5" onClick={() => router.push("/dynamic/1234")}>Go</Button>
            </Flex>
            <Flex className="mt-3">
              <Heading>Server Actions</Heading>
              <Button colorScheme="blue" className="ml-5" onClick={() => router.push("/server-action")}>Go</Button>
            </Flex>
          </CardBody>
        </Card>
      </Center>

    </main>
  );
}
