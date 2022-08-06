import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

const Home: NextPage = () => {
  const {isAuthenticated, authenticate, isAuthenticating} =useMoralis();
  const router = useRouter();
  
  useEffect(() => {
    if(isAuthenticated) router.replace('/dashboard')
  }, [isAuthenticated])
  
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Head>
        <title>Learn Web3 through Moralis</title>
        <meta name="description" content="a basic tutorial of moralis IO"/>
      </Head>
      <button 
        className="px-7 py-4 text-xl rounded-xl bg-yellow-300 animate-pulse"
        disabled={isAuthenticating}
        onClick={() => authenticate({signingMessage: "Authorize linking of your wallet"})}
      >
        Login using metamask
      </button>
    </div>
  )
}

export default Home
