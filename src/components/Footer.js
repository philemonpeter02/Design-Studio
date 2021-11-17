import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'


const Footer = () => {
    return (
        <FooterContainer>
                
            <FooterLinksWrapper2>
                <FooterLinkItems>
                    <FooterLinkTitle>About</FooterLinkTitle>
                    <FooterLink to="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing purus ultricies Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Adipiscing purus ultricies 

                    </FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper2>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Links</FooterLinkTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/">UI Kit</FooterLink>
                    <FooterLink to="/">ICONS</FooterLink>
                    <FooterLink to="/">Inspiration</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Hire Us</FooterLinkTitle>
                    <FooterLink to="/">+92 343 127 9488</FooterLink>
                    <FooterLink to="/">artalisajid@gmail.com</FooterLink>
                    <FooterLink to="/">www.fiverr.com/peacedevop</FooterLink>
                    <FooterLink to="/">www.dribbble.com/artalisajid12</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
padding: 5rem calc((100vw - 1200px) / 2);
display: grid;
grid-template-columns: repeat(2, 1fr);
color: #000;
background: #fafafb;
`
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
@media screen and (max-width: 820px) {
    grid-template-columns: 1fr;

}
`
const FooterLinksWrapper2 = styled.div`
display: grid;
grid-template-columns: repeat(1, 1fr);

`
const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;
@media screen and (max-width: 400px) {
    padding: 1rem;
}
`
const FooterLinkTitle = styled.h6`
font-size: clamp(0.5rem, 3vw, 1.2rem);
margin-bottom: 15px;
color: #141414;
`
const FooterLink = styled(Link)`
text-decoration:  none;
margin-bottom: 0.5rem;
font-size: clamp(0.5rem, 3vw, 1.2rem);
color: #3d3d4e;
transition: 0.3s ease;
&:hover{
    color: #4C52EA;

}
`