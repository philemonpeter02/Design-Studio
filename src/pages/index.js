import React, {useState} from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Dropdown from "../components/Dropdown"
import Hero from "../components/Hero"
import TabSelector from "../components/TabSelector"
import ItemCards from "../components/ItemCards"
import Footer from "../components/Footer"

// markup
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Layout>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <TabSelector />
      <ItemCards  />
      <Footer  />
    </Layout>
  )
}

export default IndexPage
