import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllWallets = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        console.log("fetching wallets")
        const fetchWallets=async()=>{
            const response = await axios.get("http://localhost:4000/api/users/all")
            setData(response.data.allWallets)
        }

        fetchWallets()
    },[])

    console.log(data)
  return (
    <div>
        <h1>All wallets</h1>
        <ul>
            {data && data.map((el:any)=>(
                <li>{el.walletAddress}</li>
            ))}
        </ul>
    </div>
  )
}

export default AllWallets