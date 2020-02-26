import React from 'react'
import {Container} from './styled'
import {Title} from './styled'
import {Line} from './styled'
import {Info1} from './styled'
import {Info2} from './styled'
import {Info3} from './styled'
import {Contenedor} from './styled'
import {Sector2} from './styled'
import {ContenedorAzul} from './styled'
import {ContenedorBlanco} from './styled'
import {Price} from './styled'
import {WrapperLeft} from './styled'
import {WrapperRight} from './styled'
import {Paragraph} from './styled'
import {BlueBackground} from './styled'


import fotoMundo from '../../assets/Mundo.jpg'
import fotoDos from '../../assets/img-2.jpg'
import fotoTres from '../../assets/img-3.jpg'
import fotoBackpack1 from '../../assets/Backpack-1.png'
import fotoBackpack2 from '../../assets/Backpack-2.png'
import fotoBackpack3 from '../../assets/Backpack-3.png'


const Introduccion = () => {

    return(
        <Container>
            <Title>HOW IT WORKS</Title>
            <Line></Line>
            <Paragraph>Travell, collect, be rewardad, it's that simple!</Paragraph>
            <Contenedor>
            <Info1>
                <img src={fotoMundo} />
                <h2>SIGN UP & TRAVELL</h2>
                <p>Join our groing network of travelers, wanderers and exthisiasts! Be rewarded for doing what you love</p>
            </Info1>
            <Info2>
                <img src={fotoDos} />
                <h2>SCAN YOUR BILLS</h2>
                <p>Every time you purches with one of our many partners across the globe scan your bill to earn your points!</p>
            </Info2>
            <Info3>
                <img src={fotoTres} />
                <h2>EARN POINTS, GET REWANRDED</h2>
                <p>By vollecting points get rewarded with great prices from more than 5,000 companies we partnered with.</p>
            </Info3>
            <button>LEARN MORE</button>
            </Contenedor>
            <BlueBackground>
                <Sector2>
                    <h1>PLANS & PRICING</h1>
                    <h2>Get started with one of ours suscription plans.</h2>
                    <ContenedorAzul>
                        <WrapperLeft>
                        <img src={fotoBackpack1} />
                        <h3>E N T H U S I A S T</h3>
                        <Price>FREE</Price>
                        <p>Limited Rewards<br></br>
                            No Starter Credits<br></br>
                            Reward for every 1000 Points
                        </p>
                        </WrapperLeft>
                        <WrapperRight>
                        <img src={fotoBackpack2} />
                        <h3>E X P L O R E R</h3>
                        <Price>$ 38 / year</Price>
                        <p>Unlimited Rewards<br></br>
                            100 Credits<br></br>
                            Reward for every 120 Points
                        </p>
                        </WrapperRight>
                    </ContenedorAzul>
                    <ContenedorBlanco>
                        <img src={fotoBackpack3} />
                        <h3>W A N D E R E R</h3>
                        <Price>$ 26 / year</Price>
                        <p>Unlimited Rewards<br></br>
                            50 Credits<br></br>
                            Reward for every 250 Points
                        </p>
                        <button>J O I N</button>
                    </ContenedorBlanco>
                    
                </Sector2>
            </BlueBackground>
        </Container>
        
    )
}

export default Introduccion