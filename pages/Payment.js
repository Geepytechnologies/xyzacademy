import React,{useState} from 'react'
import { PaystackButton } from "react-paystack"
import Head from 'next/head'
import Navbar from '../components/navbar/Navbar';

export default function Pay() {
  const publicKey = "pk_live_e86d006caf0b6e1b565b6da482b995a15606a35e"
  const amount = 6000000;
  const item = "Get the Course";
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <>
    <Head>
        <title>Xyzacademy</title>
        <meta name="description" content="Xyz Academy" />
        <link rel="icon" href="/logo1.png" />
      </Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
    <Navbar />
    <div className="container flex-col md:flex-row w-[90%] md:w-[50%]">
    <div className="bg-[#f8f8f8] w-[100%] md:w-[40%]">
      <div className="bg-[url('/logo1.png')] bg-cover h-[200px] w-[200px] "></div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-[600] text-[30px]">{item}</p>
        <p className="font-[600]">NGN {amount / 100}</p>
      </div>
    </div>
    <div className="w-[100%] md:w-[60%] bg-[#f6f6f6] flex items-center justify-center flex-col">
      <form className="w-[90%]">
        <div className="">
        <label>Name</label>
        <input
          required={true}
          className="w-[100%] border border-[black] p-[5px] rounded-lg"
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
        <label>Email</label>
        <input
           required={true}
           className="w-[100%] border border-[black] p-[5px] rounded-lg"
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <label>Phone</label>
        <input
           required={true}
           className="w-[100%] border border-[black] p-[5px] rounded-lg"
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        </div>
      </form>
      <div className="bg-[black] text-white p-[10px] mt-[20px] rounded-lg">
      <PaystackButton {...componentProps} />
      </div>
    </div>
  </div>
  </>
  )
}
