import React, {useState} from "react"
import Layout from "../components/layout"
import Header from "../components/Header"
import Dropdown from "../components/Dropdown"
import Hero from "../components/Hero"
import TabSelector from "../components/TabSelector"
import allData from "../data/AllData"
import ItemCards from "../components/ItemCards"
import Footer from "../components/Footer"
import { allData } from '../data/AllData'

// markup
const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [tabs, setTabs] = useState('All')
  const [dataList, setDataList] = useState([])
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const initialTab = allData.filter(function(item){
        return item.category == 'Sports';
    })
    const setTabsFilter = tabs => {
       
            setDataList([...allData.filter(e => e.tabs === tabs)])
        setTabs(tabs)
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
