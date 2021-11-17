import React from 'react'
import styled from 'styled-components'
import "./Styles/Fonts.css"

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Design UI kits, Templates & Resources</HeroH1>
                    <HeroP>COLLECTION OF FREE FIGMA RESOURCES</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
background: #F8F8FE;
display: flex;
justify-content: center;
align-items: center;
height: 400px;
padding: 0 1rem;
position: relative;
color: #000;
z-index: 1;
`

const HeroContent = styled.div`
z-index: 3;
justify-content: center;
align-items: center;
height: calc(100vh - 80px);
max-height: 100%;
padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;
max-height: 100%;
padding: 0;
color: #000;
line-height: 1.1;
font-weight: bold;
`

const HeroH1 = styled.h1`
font-size: clamp(1.5rem, 6vw, 3.5rem);
font-family: Gilroy-Bold;
color: #141414;
margin-bottom: 1.5rem;
letter-spacing: 3px;
padding: 0 1rem;
`

const HeroP = styled.p`
color: #3C3C3C;
font-size: clamp(0.5rem, 3vw, 1.2rem);
font-family: SFProTextMedium;
margin-bottom: 2rem;
font-weight: 400;
`