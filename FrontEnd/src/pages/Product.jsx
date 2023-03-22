import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import {GrFormAdd} from 'react-icons/gr';
import {HiMinus} from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';



const Container=styled.div``
const Wrapper=styled.div`
display:flex;
padding:50px;
`
const ImageContainer=styled.div`
flex:1;
`

const Image=styled.img`
width:100%;
height:90vh;
object-fit:cover;
box-shadow: 1px 4px 3px #aaaaaa;
`

const InfoConatainer=styled.div`
flex:1;
padding:0px 50px;
`

const Title=styled.h1`
font-weight:200;
`

const Desc=styled.p`
margin:20px 0px;

`

const Price=styled.span`
font-weight:100;
font-size:40px;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
`
const Filter=styled.div`
display:flex;
align-items:center;
`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterTitle=styled.span`
font-size:20px;
font-weight:200;    
`
const FilterSize=styled.select`
margin-left:10px;
padding:5px;
`
const FilterSizeOption=styled.option``

const AddContainer=styled.div`
display:flex;
justify-content:space-between;
width:50%;
`

const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
`

const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px
`

const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor:pointer;
font-weight:700;
border-radius:10px;

&:hover{
    background-color:#81e776
}
`












const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/> 
        <Wrapper>
            <ImageContainer>
                <Image src="https://static-01.daraz.com.bd/p/690ed7fe0b04b10e40fb6964c82915f4.jpg"></Image>
            </ImageContainer>
            <InfoConatainer>
                <Title>Jeans Pant</Title>
                <Desc>Jeans are casual-wear pants typically 
                    made from denim fabric. Patented in the 
                    nineteenth century in the United States by 
                    Levi Strauss and Jacob Davis,
                    a typical pair of jeans usually features a
                    button clasp, a zipper, belt loops, and front
                    and back pockets, with copper rivets to reinforce
                    the pockets</Desc>
                <Price>Rs. 900</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <HiMinus/>
                        <Amount>1</Amount>
                        <GrFormAdd/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoConatainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>



    </Container>
  )
}

export default Product