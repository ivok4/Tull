import React from 'react';
import './index.css';
import {Container} from './styled'
import Navbar from '../Navbar'
import Header from '../Header'
import Introduccion from '../Introduccion'
import Footer from '../Footer'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filters:{
        filter1:'select',
        filter2:'select'
      }

    }



    this.HandleFilterChange= this.HandleFilterChange.bind(this)
  }

HandleFilterChange(event){

  let payload=this.state.filters
  payload[event.target.name]=event.target.value

  this.setState({
    filters:payload
  })
console.log(this.state.filters)
}

  render (){
    return (
    <Container>
        <Navbar />
        <Header />
        <Introduccion />
        <Footer />
    </Container>
    )

  }
   
}
export default App;
