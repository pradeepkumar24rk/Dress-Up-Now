import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const KEY="pk_test_51Mqn1KSF8fTi4vG2ZyFhkbNU2FQGr72Dyfm8rjx36GdHLiz6f0xCIZV91tLFIioA56oILvPzNuCi2OaQEJmNSbB200mDLlLW5r"

const Payment = () => {
  const [stripeToken,setStripeToken]=useState(null)
  const onToken=(token)=>{
    console.log(token);
    setStripeToken(token);
  }

  useEffect(()=>{
    const makepayment=async()=>{
      try{
        const res=await axios.post('http://localhost:5001/api/checkout/payment',{
          tokenId:stripeToken.id,
          amount:2000,
        });
        console.log(res.data);
        
      }
      catch(err){
        console.log(err);
      }
    }
    stripeToken && makepayment() ;
  },[stripeToken])
  return (
    <Container>
        <StripeCheckout
        name="Pradeep"
        image='https://funkylife.in/wp-content/uploads/2023/01/whatsapp-dp-by-funkylife-561-1.jpg'
        billingAddress
        shippingAddress
        description='Your total is Rs 20'
        amount={2000}
        currency='INR'
        token={onToken}
        stripeKey={KEY}
        >
            <PaymentButton>Payment</PaymentButton>
        </StripeCheckout>
    </Container>
  )
}

export default Payment

const Container =styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items:center ;

`
const PaymentButton = styled.button`
    padding: 20px;
    font-size: 20px;
` 