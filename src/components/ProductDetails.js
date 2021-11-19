import React, { useState } from 'react'
import styled from 'styled-components'
import {imgData} from '../data/ProductImgs' 
const ProductDetails = ({img}) => {
    const [image, setImage] = useState(img)
    return (
        <ImageWrapper>
           <Image src={image} />
           <ImageBtnContainer>
           {
               imgData.map((item, index) => (
                <ImageBtn src={item.img} onClick={() => setImage(item.img)}>

                </ImageBtn>
               ))
           }
           </ImageBtnContainer>
           <ProductDesc>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio aliquet at varius rutrum eu aliquam. Id enim quam et elit eu. Viverra varius odio donec praesent mauris, feugiat eget pharetra. Adipiscing dictumst sagittis, et, eget quis nulla elit. Dignissim accumsan diam potenti sem pellentesque. Netus integer eget aliquet neque.

In vestibulum arcu commodo, ac eget. Vel faucibus massa praesent volutpat mi, pharetra. Nisl, at duis sed et sit diam, ultricies purus. Euismod semper maecenas vitae urna diam. Mollis integer orci lobortis lectus adipiscing. Est enim elementum viverra mi et. Pharetra, lacus purus malesuada elit, ultricies ac ornare volutpat. Aenean ultrices amet, lectus eget pellentesque amet.
           </ProductDesc>
           <BtnContainer>
                <Btn style={{backgroundColor: '#4C52EA', color: '#fff'}} type="button">
                    Hire Us
                </Btn>
                <Btn type="button">
                    Download
                </Btn>
           </BtnContainer>
            
        </ImageWrapper>
    )
}

export default ProductDetails

const ImageWrapper = styled.div`
margin-top: 25px;
padding: 0.5rem calc((100vw - 1200px) / 2);
margin-bottom: 25px;
display:flex;
align-items: center;

flex-direction: column;
`
const ImageBtnContainer = styled.div`
margin-top: 25px;
display:flex;
align-items: center;

flex-direction: row;
`
const BtnContainer = styled.div`
height: 80px;
margin-top: 25px;
display:flex;
align-items: center;

flex-direction: row;
`
const Image = styled.img`
width: 1200px;
height: 800px;
border-radius: 5px;
transition: 0.2s ease;
@media screen and (max-width: 1336px) {
    width: 1000px;
    height: 600px;
}
@media screen and (max-width: 1080px) {
    width: 800px;
    height: 400px;
}
@media screen and (max-width: 864px) {
    width: 600px;
    height: 300px;
}
@media screen and (max-width: 634px) {
    width: 400px;
}
@media screen and (max-width: 484px) {
    width: 350px;
}
@media screen and (max-width: 428px) {
    width: 300px;
}
@media screen and (max-width: 300px) {
    width: 250px;
    height: 250px;

}
`
const ImageBtn = styled.img`
width: 100px;
height: 100px;
background-color: #000;
margin-top: 40px;
margin-bottom: 40px;
margin-right: 25px;
margin-left: 25px;
filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.25));
border-radius: 5px;
transition: 0.2s ease;
@media screen and (max-width: 500px) {
    margin-right: 15px;
    margin-left: 15px;
}
@media screen and (max-width: 428px) {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 10px;
    margin-left: 10px;
    width: 80px;
    height: 80px;
}
@media screen and (max-width: 300px) {
    margin-top: 20px;
    margin-bottom: 20px;

    width: 60px;
    height: 60px;
}
`
const ProductDesc = styled.p`
font-size: clamp(0.5rem, 3vw, 1.2rem);
color: #3C3C3C;
line-height: 21px;
padding: 1rem 2rem;
@media screen and (max-width: 400px) {
    padding: 1rem;
}
`
const Btn = styled.button`
border: 1px solid #4C52EA;
padding: 10px 14px;
background-color: transparent;
color: #4C52EA;
border-radius: 5px;
font-size: clamp(0.5rem, 3vw, 1.2rem);
margin: 0 15px;
transition: 0.2s ease;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
  z-index:100;
}
@media screen and (max-width: 320px) {
    width: 80px;
    height: 34px;
}
`