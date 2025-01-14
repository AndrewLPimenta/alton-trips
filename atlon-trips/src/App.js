import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Section from './components/Section';
/* import Mapas from './components/Mapas'; */
import Banner from './components/Banner';
import DivInfo from './components/DivInfo';
import Social from './components/Social';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <div className="App">
        <header>
          <Header />
        </header>
        <Banner className="mb-4" />
        
        <div className="container">
          
          <Section />
          {/* <Mapas /> */}
        </div>
        < DivInfo/>
        <Info />
        <Social />
        <Footer/>
      </div>
    </main>
  );
}

export default App;