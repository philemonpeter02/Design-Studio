import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa';
import logo from '../images/logo.png';

const Modal = ({showModal, setShowModal}) => {
    return (
        <>
        {
            showModal ? (
                <ModalContainer>
                    <IconContainer>
                       <CloseIcon onClick={() => setShowModal(prev => !prev)} />
                    </IconContainer>
                    <ModalWrapper>
                       <ModalHeader>
                          <Avatar src={logo}/>
                          <ModalTitle>Message Sajid Design Studio</ModalTitle>
                       </ModalHeader>
                       <ModalFormSection>
                          <ModalForm>
                             <TextInput type="text"  />
                             <BtnInput type="submit" value="Send Now" />
                           </ModalForm>
                       </ModalFormSection>
                    </ModalWrapper>
                </ModalContainer>
            ) : null        
        }
            
        </>
    )
}

export default Modal

const ModalContainer = styled.div`
position: fixed;
top:0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.8);
z-index: 999;
display: flex;
justify-content: center;
align-items: center;
`
const IconContainer = styled.div`
width: 100%;
height: 100%;
position: fixed;
display: flex;
justify-content: flex-end;
align-items: flex-start;
`
const ModalWrapper = styled.div`
width: 1000px;
height: 500px;
box-shadow: 0 5px 16px rgba(0,0,0,0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr;
position: relative;
z-index: 10;
border-radius: 5px;
padding: 2rem 2rem;
transition: 0.2s ease;
@media screen and (max-width: 1120px) {
    width: 800px;
}
@media screen and (max-width: 880px) {
    width: 600px;
}
@media screen and (max-width: 680px) {
    width: 400px;
}
@media screen and (max-width: 480px) {
    width: 350px;
}
@media screen and (max-width: 380px) {
    width: 300px;
}
@media screen and (max-width: 330px) {
    width: 250px;
    height: 400px;

}
`
const ModalHeader = styled.div`
height: 80px;
display: flex;
flex-direction: row;
align-items: center;
`
const ModalFormSection = styled.div`
height: 350px;
padding-top: 1rem;
`
const ModalForm = styled.form`
display: flex;
flex-direction: column;
align-items: flex-end;
`
const TextInput = styled.input`
height: 270px;
width: 100%;
margin-bottom: 1rem;
background-color: #F3F3F4;
outline: none;
border: none;
box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 0.25);
@media screen and (max-width: 330px) {
    height: 170px;

}
`
const BtnInput = styled.input`
width: 127px;
height: 44px;
font-size: clamp(0.5rem, 3vw, 1.2rem);
background-color: #4C52EA;
outline: none;
border: none;
border-radius: 5px;
color: #fff;
cursor: pointer;
@media screen and (max-width: 320px) {
    width: 80px;
    height: 34px;
}
`
const Avatar = styled.img`
color: #000;
display: flex;
align-items: center;
height: 100%;
padding: 0 1rem;
cursor: pointer;
@media screen and (max-width: 680px) {
   height: 80%;
}
@media screen and (max-width: 460px) {
   height: 50%;
}
`
const CloseIcon = styled(FaTimes)`
font-size: 20px;
margin: 1rem;
color: #fff;
cursor: pointer;
`
const ModalTitle = styled.h5`
color: #000;
font-size: clamp(1rem, 4vw, 1.5rem);
`