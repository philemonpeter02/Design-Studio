import React from 'react'
import Layout from '../components/Layout'
import ProductNav from '../components/ProductNav'
import ProductDetails from '../components/ProductDetails'
import ItemCardsSection from '../components/ItemCardsSection'
import { allData } from '../data/AllData'
import Footer from "../components/Footer"

const ProductPage = ({location}) => {
    
    return (
        <Layout>
          <ProductNav title={location.state.title} downloads={location.state.downloads} views={location.state.views} />
          <ProductDetails img={location.state.img}  />
          <ItemCardsSection itemData={allData}/>
          <Footer />
        </Layout>
    )
}

export default ProductPage
