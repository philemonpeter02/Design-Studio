import React from 'react'
import Layout from '../components/Layout'
import ProductNav from '../components/ProductNav'
import ProductDetails from '../components/ProductDetails'
import ItemCardsSection from '../components/ItemCardsSection'
import { allData } from '../data/AllData'
import Footer from "../components/Footer"

const Product = ({location}) => {
    return (
        <Layout>
          <ProductNav title={location.state ? location.state.title : null} downloads={location.state ? location.state.downloads : null} views={location.state ? location.state.views : null} />
          <ProductDetails img={location.state ? location.state.img : null}  />
          <ItemCardsSection itemData={allData} />
          <Footer />
        </Layout>
    )
}

export default Product
