import React,{useState} from 'react'
import { PaystackButton } from "react-paystack"
import axios from 'axios';


export default function Payment() {
  const publicKey = "pk_test_9f80648df27aa9d39816dc02d0bb64f83ace3241"
  const amount = 1000000
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
    onSuccess: async() =>{
      alert("Thanks for doing business with us! Come back soon!!")
      try {
        await axios.post('http://localhost:5000/send',{name,email,phone}).then(res=>console.log(res.data))
      } catch (error) {
        console.log(error)
      }
    },
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <div className="container">
    <div className="item">
      <div className="item-details">
        <p>Dancing Shoes</p>
        <p>{amount}</p>
      </div>
    </div>
    <div className="checkout-form">
      <form>
        <label>Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
      </form>
      <PaystackButton {...componentProps} />
    </div>
  </div>

  )
}
