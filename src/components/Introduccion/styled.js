import styled from 'styled-components'

const Container = styled.div`

    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    background: linear-gradient(180deg, #FFF 35%, #00466E 33%);
`
const Title = styled.h1`

font-size: 20px;
color: #0F3D4C;
width: 20%;
margin-left: 40%;
margin-top: 5%;
`

const Paragraph = styled.p`
font-size: 20px;
color: #0F3D4C;
margin-left: 33%;
font-weight: 300;

`
const Line = styled.div`
width: 5%;
height: 1px;
background-color: #000;
margin-left: 43%;

`
const Contenedor = styled.div`
width: 70%;
margin-left:15%;
margin-right:15%;
box-shadow: 5px 10px 20px -10px #888888;
background-color:#FFF;
button{
    background-color: #F18882;
    width: 20%;
    height: 30px;
    border-radius: 15px;
    color: #FFF;
    margin: 5% 40%;
}
`
const Info1 = styled.div`
width: 20%;
height: 300px;
position: relative;
float: left;
margin-left:4%;
img{
    width:70%;
}
h2{
    font-size: 15px;
    color: #F18882;
    width: 70%;
    font-weight: 300;
    margin: 0 auto;
}
p{
    font-size: 13px;
    color: #000;
    width: 100%;
    font-weight: 300;
}
`
const Info2 = styled.div`
width: 20%;
height: 300px;
margin-left:14%;
position: relative;
float: left;
img{
    width:70%;
}
h2{
    font-size: 15px;
    color: #F18882;
    width: 70%;
    font-weight: 300;
    margin: 0 auto;
}
p{
    font-size: 13px;
    color: #000;
    width: 100%;
    font-weight: 300;
}
`
const Info3 = styled.div`
width: 20%;
height: 300px;
margin-left:18%;
margin-right:4%;
position: relative;
float: left;
img{
    width:70%;
}
h2{
    font-size: 15px;
    color: #F18882;
    width: 70%;
    font-weight: 300;
    margin: 0 auto;
}
p{
    font-size: 13px;
    color: #000;
    width: 100%;
    font-weight: 300;
}
`
const BlueBackground = styled.div`
height:600px;
`
const Sector2 = styled.div`

font-size: 20px;
color: #0F3D4C;
width: 80%;
margin-left: 10%;
margin-top: 5%;
h1{
    font-size: 20px;
    color: #FFF;
    width: 20%;
    margin-left: 40%;
    margin-top: 5%;
}
h2{
    font-size: 15px;
    color: #FFF;
    width: 30%;
    font-weight: 300;
    margin: 0 auto;
}
`
const ContenedorAzul = styled.div`

background-color: #B9E1EE;
width:60%;
height:350px;
margin: 60px 10%;
border-radius:10px;
position: absolute;

`
const ContenedorBlanco = styled.div`

background-color: #FFF;
width:20%;
height: 450px;
margin: 30px auto;
border-radius:10px;
position: relative;
img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
}
h3{
    color: #F18882;
    width: 70%;
    font-size: 20px;
    margin: 15px auto;
    font-weight: 300;
}
p{
    font-size: 15px;
    width:64%;
    font-weight: 300;
    margin:15px auto;
    text-align: center;
}
button{
    background-color: #F18882;
    width: 50%;
    height: 30px;
    border-radius: 15px;
    color: #FFF;
    display: block;
    margin-left: auto;
    margin-right: auto;}
`
const Price = styled.h4`

    font-size: 25px;
    font-family: Nunito bold;
    color: #000;
    width: fit-content;
    font-weight: 900;
    margin: 10px auto;
`
const WrapperLeft = styled.section`
    width:37%;
    position:relative;
    float:left;
    img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    h3{
        color: #F18882;
        width: fit-content;
        font-size: 15px;
        margin: 15px auto;
        font-weight: 300;
    }
    p{
        font-size: 15px;
        width: fit-content;
        font-weight: 300;
        margin:15px auto;
        text-align: center;
    }
`
const WrapperRight = styled.section`
  width:37%;
  float:left;
  margin-left:26%;
  img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
h3{
    color: #F18882;
    width: fit-content;
    font-size: 15px;
    margin: 15px auto;
    font-weight: 300;
}
p{
    font-size: 15px;
    width: fit-content;
    font-weight: 300;
    margin:15px auto;
    text-align: center;
}
`


export {Container,WrapperLeft, BlueBackground,WrapperRight, Price, Title,Line, Paragraph,ContenedorAzul,ContenedorBlanco, Info1, Info2,Info3, Contenedor, Sector2}
