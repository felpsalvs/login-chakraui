import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex
        background="barber.900"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={30}>Página Home</Text>
        <Link href="/login" passHref>
          <Button ml={4} colorScheme="teal">
            Login
          </Button>
        </Link>
      </Flex>
    </>
  );
}
