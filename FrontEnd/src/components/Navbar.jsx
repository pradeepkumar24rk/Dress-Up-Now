// import { Search } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@mui/icons-material'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  return (
    <Container>
        <Wrapper>

            <Left>
                <Language>En</Language>
                <SearchContainer>
                    <Input/>
                    <BiSearch style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
            </Left>

            <Center>
                <Logo>E-COM.</Logo>
            </Center>

            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign in</MenuItem>
                <MenuItem>
                    <Badge badgeContent={5} color="primary">
                        <ShoppingCartOutlined  color="action" />
                    </Badge>
                </MenuItem>

            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

const Container=styled.div`
    height: 60px;
`
const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Input=styled.input`
    border: none;
`
const SearchContainer=styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Center=styled.div`
flex: 1;
text-align: center;
`
const Logo=styled.h1`
    font-weight: bold;
`
const Right=styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItem=styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`