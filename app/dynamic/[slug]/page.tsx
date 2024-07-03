"use client";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Heading, Flex, Center, Button } from '@chakra-ui/react'
import { useRouter, usePathname } from "next/navigation";

import NextLogo from "@/app/assets/next.svg";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();  

  const path = pathname?.split("/").pop();

    const goToRandom = () => {
        router.push(`/dynamic/${Math.floor(Math.random() * 100000)}`);
    }

  return (
    <main className="">
      <Center>
        <Heading size="2xl" className="text-black mt-10">Test NextJS App</Heading>
      </Center>
      <Center>
        <Heading className="text-black mt-3">ダイナミックルート</Heading>
      </Center>
      <Center>
        <Card width={1000} className="mt-5">
          <CardBody>
            <Flex className="mt-3">
              <Heading>現在閲覧してるパス</Heading>
            </Flex>
            <Flex className="mt-3">
              <Heading>/{path}</Heading>
              <Button colorScheme="blue" className="ml-5" onClick={() => goToRandom()}>ランダムなパスに行く</Button>
            </Flex>
            <Flex className="mt-3">
              <Heading>どのパスにも自由に行けます。</Heading>
            </Flex>
            <Flex className="mt-3">
              <Heading>トップに戻る</Heading>
              <Button colorScheme="blue" className="ml-5" onClick={() => router.push("/")}>Go</Button>
            </Flex>
          </CardBody>
        </Card>
      </Center>

    </main>
  );
}
