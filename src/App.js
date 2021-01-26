import React from 'react';
import Header from './component/header/header';
import Slider from './component/slider/Slider';
import Services from './component/body/Services'
import Contact from './component/body/Contact';


function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
