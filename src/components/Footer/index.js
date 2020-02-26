import React from 'react'
import {Container} from './styled'
import {SocialMedia} from './styled'
import {Enlaces} from './styled'
import styled from 'styled-components'
import {Twitter} from 'styled-icons/boxicons-logos/Twitter'
import {Facebook} from 'styled-icons/boxicons-logos/Facebook'
import {Linkedin} from 'styled-icons/boxicons-logos/Linkedin'

const GrayTwitter = styled(Twitter)`
  color: #E8E8E8;
  width: 30%;
`
const GrayFacebook = styled(Facebook)`
  color: #E8E8E8;
  width: 30%;
`
const GrayLinkdein = styled(Linkedin)`
  color: #E8E8E8;
  width: 30%;
`

const Footer = () => {

    return(
        <Container>
            <p>Copirigth © Tull</p>
            <Enlaces>
            <p><a href="#">Contact us</a></p>
            <p><a href="#">Privacy</a></p>
            <p><a href="#">Policy</a></p>
            <p><a href="#">About</a></p>
            </Enlaces>
            <SocialMedia>
                <GrayTwitter />
                <GrayFacebook />
                <GrayLinkdein />
            </SocialMedia>
        </Container>
        
    )
}

export default Footer