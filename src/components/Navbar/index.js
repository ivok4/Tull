import React from 'react'
import {Container} from './styled'


import fotoLogo from '../../assets/Logo.png'

const Navbar = () => {

    return(

        <Container>
            <h1><a href="#"><img src={fotoLogo} /></a></h1>
            <button>J O I N</button>
        </Container>
    )
}

export default Navbar