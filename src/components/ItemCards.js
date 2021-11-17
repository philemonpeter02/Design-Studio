import React from 'react'
import styled from 'styled-components'
import { allData } from '../data/AllData'
import { FaRegArrowAltCircleDown } from 'react-icons/Fa';
import { FiEye } from 'react-icons/Fi';


const ItemCards = ({menuItem}) => {
    return (
        <CardsContainer>
           <TitleContainer>
               <SectionTitle>
               Check out some of today’s popular shots
               </SectionTitle>
           </TitleContainer>
           <CardItems>
           {
               allData.map((item, index) => (
                   <ItemContainer>
                       <ItemImg src={item.img} />
                       <ItemDesc>
                          <ItemTitle>
                             {item.title}
                          </ItemTitle>

                          <ItemDownloads>
                             <DownloadIcon/>
                             <ItemContentText>
                                {item.downloads}
                             </ItemContentText>
                          </ItemDownloads>
                          <ItemViews>
                             <ViewsIcon/>
                             <ItemContentText>
                                {item.views}
                             </ItemContentText>
                          </ItemViews>
                       </ItemDesc>
                   
                   </ItemContainer>
               ))
           }
           </CardItems>
        
            <BtnContainer>
               <Btn type="button">
               Load More...
               </Btn>
            </BtnContainer>
        </CardsContainer>
    )
}

export default ItemCards
const CardsContainer = styled.div`
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
`
const TitleContainer = styled.div`
width: 100vw;
height: 100px;
display: flex;
justify-content: center;
align-items: flex-end;
`
const BtnContainer = styled.div`
width: 100vw;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 15px;
`
const Btn = styled.button`
outline: none;
border: none;
width: 280px;
height: 44px;
background-color: #4C52EA;
color: #fff;
border-radius: 5px;
font-size: clamp(0.5rem, 3vw, 1.2rem);

`
const CardItems = styled.div`
margin-top: 40px;
 display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
@media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
}
@media screen and (max-width: 860px) {
    grid-template-columns: repeat(1, 1fr);
}
`
const SectionTitle = styled.p`
color: #3C3C3C;
font-size: clamp(0.5rem, 3vw, 1.2rem);
line-height: 21px;
text-align: center;
`
const ItemContainer = styled.div`
width: 340px;
height: 400px;
margin-bottom: 1rem;
`
const ItemImg = styled.img`
width: 340px;
height: 350px;
`
const ItemDesc = styled.div`
width: 340px;
height: 50px;
display: flex;
flex-direction: row;

`
const ItemTitle = styled.p`
display: flex;
width: 200px;
height: 50px;
font-size: clamp(0.5rem, 3vw, 1.2rem);
color: #3C3C3C;
display: flex;
align-items: center;
`
const ItemDownloads = styled.div`
display: flex;
width: 70px;
height: 50px;
font-size: 18px;
display: flex;
align-items: center;
`
const ItemViews = styled.div`
display: flex;
width: 70px;
height: 50px;
font-size: 18px;
display: flex;
align-items: center;
`
const ItemContentText = styled.p`
font-size: 12px;
color: #3C3C3C;
`
const DownloadIcon = styled(FaRegArrowAltCircleDown)`
color: #3C3C3C;
font-size: 14px;
margin-right: 5px;
`
const ViewsIcon = styled(FiEye)`
color: #3C3C3C;
font-size: 16px;
margin-right: 5px;
`