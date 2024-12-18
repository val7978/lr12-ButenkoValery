   // src/App.js
   import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import Nav from './layout/Nav';
   import About from './pages/About-us';
   import Contacts from './pages/Contacts';
   import FAQ from './pages/FAQ';
   import Portfolio from './pages/Portfolio';
   import Products from './pages/Products';
   import Services from './pages/Services';

   const App = () => {
       return (
           <Router>
               <Nav />
               <Routes>
                   <Route path="/services" element={<Services />} />
                   <Route path="/products" element={<Products />} />
                   <Route path="/about-us" element={<About />} />
                   <Route path="/portfolio" element={<Portfolio />} />
                   <Route path="/FAQ" element={<FAQ />} />
                   <Route path="/contacts" element={<Contacts />} />
               </Routes>
           </Router>
       );
   };

   export default App;
   

