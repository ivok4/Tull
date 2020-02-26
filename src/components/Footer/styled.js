import styled from 'styled-components'

const Container = styled.div`

display:flex;
align-items:center;
justify-content:space-between;
padding:15px 10%;
background-color: #FFF;
h1{
    width: 10%;
}
img{
    width: 100%;

}
p{
    color:gray;
    display: inline-block;
 }
a{
    color: gray;
    text-decoration: none;
}
`

const Enlaces = styled.div`
font-size: 15px;
color: #0F3D4C;
width: 40%;
display:flex;
align-items:center;
justify-content:space-between;

`
const SocialMedia = styled.div`
width: 10%;
display:flex;
align-items:center;
justify-content:space-between;

`

export {Container, Enlaces, SocialMedia}
