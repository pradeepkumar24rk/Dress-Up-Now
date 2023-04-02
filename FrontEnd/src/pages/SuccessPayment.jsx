import React from 'react'
import styled from 'styled-components'

const SuccessPayment = () => {
  return (
    <Container>
        <Wrapper>
            <Success>Payment Successfully</Success>
        </Wrapper>
    </Container>
  )
}

export default SuccessPayment

const Container =styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items:center ;

`
const Wrapper=styled.div`
    
`
const Success=styled.h1`
    
`