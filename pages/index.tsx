import { ChakraProvider } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components /navbar';


const Home: NextPage = () => {
  return (
    <div className={'Home'}>
      <Head>
        <title>Edu App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </div>
  );
}

export default Home;
