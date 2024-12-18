
   import React from 'react';
   import { Link } from 'react-router-dom';

   import Logo from '../images/logo.svg';
   import Measering from '../images/measering.svg';
   import Calculation from '../images/calculation.svg';

   const Nav = () => {
    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexdirection: 'row',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
    };

    const ulStyle = {
        listStyleType: 'none',
        display: 'flex',
        margin: '20px',
        padding: 0,
    };

    const liStyle = {
        margin: '0 10px', 
    };

    const imgStyle = {
        height: '40px', 
        marginLeft: '10px', 
    };
       return (
           <nav style={navStyle}>
                <Link><img src={Logo} alt="logo"/></Link>
                <ul style={ulStyle}>
                   <li style={liStyle}><Link to="/services">Services</Link></li>
                   <li style={liStyle}><Link to="/products">Products</Link></li>
                   <li style={liStyle}><Link to="/about-us">About us</Link></li>
                   <li style={liStyle}><Link to="/portfolio">Portfolio</Link></li>
                   <li style={liStyle}><Link to="/FAQ">FAQ</Link></li>
                   <li style={liStyle}><Link to="/contacts">Contacts</Link></li>
                </ul>
                <div>
                    <Link to="/measering"><img src={Measering} alt="Measuring" style={imgStyle} /></Link>
                    <Link to="/calculation"><img src={Calculation} alt="Calculation" style={imgStyle} /></Link>
            </div>
           </nav>
       );
   };

   export default Nav;
   
