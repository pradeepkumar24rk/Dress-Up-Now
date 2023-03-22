import React from 'react'

import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container= styled.div`

`
const Title=styled.h1`
margin:20px;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`
const Filter=styled.div`
margin:20px;
`
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`

const Select=styled.select`
margin-right:20px;
padding:10px;
border-radius:10px;
box-shadow: 1px 4px 3px #aaaaaa;
`

const Option=styled.option`
border-radius:10px;
`




const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>


      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Product Filter:</FilterText>
          <Select>
            <Option disabled selected>color</Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Brown</Option>
            <Option>Green</Option>
          </Select>

          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>L</Option>
            <Option>XL</Option>
            
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product