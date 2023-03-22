import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
// import ImgSlider from '../components/ImgSlider'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      {/* <ImgSlider/> */}
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Home

const Container=styled.div`
  overflow: hidden;
`