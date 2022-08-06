import Moralis from "moralis"
import { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useMoralis } from "react-moralis"


const Dashboard: NextPage = () => {
    const {
        isAuthenticated, 
        logout,
        ...allMoralis
    } =useMoralis()
    const router = useRouter()

    useEffect(() => {
      if(!isAuthenticated) router.replace('/')
    }, [isAuthenticated])
    

    console.log(Moralis)

    const sendEth = async () => {
        try {
            await Moralis.enableWeb3();
            const result = await Moralis.transfer({
                type: 'native',
                amount: Moralis.Units.ETH('0.1'),
                receiver: '0xB3205C01e71bDcffB447E890e63B9C8380C3D124' // my second account address
            })
            console.log(result)
            alert("transfer of funds succeede!")
        } catch (error) {
            console.error(error)
            alert('something went wrong')
            
        }
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <Head>
                <title>Moralis tutorial - Dashboard</title>
            </Head>
            <div className="space-x-2">
                <button 
                    className="px-7 px-4 rounded-xl bg-yellow-300"
                    onClick={sendEth}    
                >
                    Send 0.1 ETH to owner
                </button>
                <button 
                    className="px-7 px-4 rounded-xl bg-yellow-300"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
            
        </div>
    )
}

export default Dashboard