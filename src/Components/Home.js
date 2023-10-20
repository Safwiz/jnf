import React from 'react'
import Slider from './Slider'
import Cards from './Cards'
import Services from './Services'
import Footer from './Footer'
import Copyrights from './Copyrights'

function Home() {
    return (
      <div className="Home">
        <Slider text={'JN Freight, tout types de transport !'}/>
        <Cards />
        <Services />
        <Footer />
        <Copyrights />
      </div>
    );
  }
  
  export default Home;