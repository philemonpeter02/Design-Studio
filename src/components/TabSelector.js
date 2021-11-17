import React from 'react'
import styled from 'styled-components'
import {tabsData} from "../data/TabsData"

const TabSelector = ({filterItem}) => {
    return (
        <TabsWrapper>
           <TabsContainer>
      {tabsData.map((item, i) => (
        <TabsBtn type="button" key={i} onClick={() => filterItem(item.title)}>
        {item.title}
          
        </TabsBtn>
      ))}
      
           </TabsContainer>
            
        </TabsWrapper>
    )
}

export default TabSelector

const TabsWrapper = styled.div`
height: 80px;
width: 100vw;
margin-top: -40px;
z-index:2;
position: absolute;

`
const TabsContainer = styled.div`
margin: 0 auto;
height: 80px;
width: 580px;
background-color: #fff;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.25);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 720px) {
width: 480px;
}
@media screen and (max-width: 572px) {
width: 400px;
}
`
const TabsBtn = styled.button`
margin: 0 12px;
font-size: clamp(0.5rem, 3vw, 1.2rem);
padding: 12px 18px;
border-radius: 5px;
outline: none;
border: none;
background-color: transparent;
&:hover{
    background-color: #4C52EA;
    color: #fff;
}
&:active, :focus{
    background-color: #4C52EA;
    color: #fff;
    font-size: 20px;
}
`