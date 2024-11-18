import axios from 'axios';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AddWallet = () => {

  const navigate = useNavigate();

  const [walletAddress,setWalletAddress] = useState("");

  const handleSubmit = async (e:FormEvent) =>{
    e.preventDefault();

    const res = await axios.post("http://localhost:4000/api/users/add",
      {walletAddress,
        userId:"123"})
  }

  const handleRedirect = () =>{
    navigate("/all")
  }

  return (
    <div>
      <h1>You are logged in</h1>
      <p>You can now submit your Ethereum wallet address.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={walletAddress}
          onChange={(e)=>setWalletAddress(e.target.value)}
          placeholder="Enter your wallet address"
          aria-label="Wallet Address"
        />
        <button type="submit">
        Add Wallet
        </button>
      </form>
      <button onClick={()=>handleRedirect()}>All Wallets</button>
    </div>
  );
};

export default AddWallet;
