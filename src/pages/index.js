import React, {useState} from "react"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Dropdown from "../components/Dropdown"
import Hero from "../components/Hero"
import TabSelector from "../components/TabSelector"
import ItemCards from "../components/ItemCards"
import Footer from "../components/Footer"
import { allData } from '../data/AllData'

// markup
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cardItems, setCardItems] = useState(allData)

  const filterItem = (catItem) => {
    if(catItem === 'All'){
      setCardItems(allData);
      return;
    }

    const updatedItems = allData.filter((item) => {
      return item.category === catItem
    });
    setCardItems(updatedItems)
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Layout>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <TabSelector filterItem={filterItem} />
      <ItemCards itemData={cardItems} />
      <Footer  />
    </Layout>
  )
}

export default IndexPage
