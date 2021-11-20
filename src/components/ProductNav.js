import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.png';
import "./Styles/Fonts.css"
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';
import { Link } from 'gatsby';

const ProductNav = ({title, downloads, views}) => {
    return (
        <Nav>
            <ContentContainer>
                <LogoContainer to="/">
                   <Avatar src={logo}/>
                </LogoContainer>
                
                <TextContainer>
                   <NavTitle>Sajid Design Studio</NavTitle>
                   <ProductTitle>{title}</ProductTitle>
                </TextContainer>
            </ContentContainer>
            <ContentContainerRight>
                          <ItemDownloads>
                             <DownloadIcon/>
                             <ItemContentText>
                                {downloads}
                             </ItemContentText>
                          </ItemDownloads>
                          <ItemViews>
                             <ViewsIcon/>
                             <ItemContentText>
                                {views}
                             </ItemContentText>
                          </ItemViews>
            </ContentContainerRight>
        </Nav>
    )
}

export default ProductNav
const Nav = styled.nav`
margin-top: 15px;
height: 80px;
display: flex;
justify-content: center;
padding: 0.5rem calc((100vw - 1300px) / 2);
z-index: 999;
@media screen and (max-width: 460px) {
   height: 50px;

}
`
const ContentContainer = styled.div`
width: 50vw;
display: flex;
flex-direction: row;
@media screen and (max-width: 460px) {
   height: 50px;
   width: 70vw;
   align-items: center;

}
`
const ContentContainerRight = styled.div`
width: 50vw;
display: flex;
flex-direction: row;
justify-content: flex-end;
@media screen and (max-width: 460px) {
   width: 30vw;
   height: 50px;
   align-items: flex-end;
   justify-content: center;
   flex-direction: column;
}
`
const TextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Avatar = styled.img`
color: #000;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
@media screen and (max-width: 460px) {
   height: 50%;
}
`
const LogoContainer = styled(Link)``
const NavTitle = styled.p`
font-size: clamp(0.7rem, 3vw, 1.4rem);
font-family: SFProTextSemibold;
`
const ProductTitle = styled.p`
font-size: clamp(0.5rem, 3vw, 1.2rem);
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
const ItemDownloads = styled.div`
display: flex;
width: 70px;
height: 55px;
font-size: 18px;
display: flex;
align-items: flex-end;
@media screen and (max-width: 360px) {
   align-items: center;

}
`
const ItemViews = styled.div`
display: flex;
width: 70px;
height: 55px;
font-size: 18px;
display: flex;
align-items: flex-end;
@media screen and (max-width: 360px) {
   align-items: center;

}
`
const ItemContentText = styled.p`
font-size: 12px;
color: #3C3C3C;
transition: 0.2s ease;

`