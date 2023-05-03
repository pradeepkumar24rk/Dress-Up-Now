import React from 'react'

import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

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
  const location=useLocation();
  const cat=location.pathname.split("/")[2];
  const [filters,setFilters]=useState({});
  const [sort,setSort]=useState("newest");

  const handleFilters=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
      [e.target.name]:value,
    })
  }
  return (
    <Container>
      <Navbar/>
      <Announcement/>


      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Product Filter:</FilterText>

          <Select name='color' onChange={handleFilters}>
            <Option disabled>color</Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>brown</Option>
            <Option>green</Option>
          </Select>

          <Select name='size' onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>M</Option>
            <Option>S</Option>
            <Option>L</Option>
            <Option>XL</Option>
            
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest" selected>Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort}/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product