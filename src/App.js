import React from 'react';
import Header from './component/header/header';
import Slider from './component/slider/Slider';
import Services from './component/body/Services'
import Contact from './component/body/Contact';
import Cotizacion from './component/body/Cotizacion';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <Contact />
      <Cotizacion />
      <Footer />
    </div>
  );
}

export default App;
