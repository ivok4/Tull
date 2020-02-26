import styled from 'styled-components'

const Container = styled.div`

    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #B9E1EE;
    position: relative;
`
const Line = styled.div`
width: 5%;
height: 1px;
background-color: #000;
margin-left: 45%;

`
const Title = styled.h1`
font-size: 25px;
color: #0F3D4C;
width: 20%;
margin-left: 40%;
margin-top: 0;

`
const Paragraph = styled.p`
font-size: 20px;
color: #0F3D4C;
margin-left: 40%;
font-weight: 300;

`

export {Container, Title, Paragraph, Line}
