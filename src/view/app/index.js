import React, { Component } from 'react';

/**
 * Importing materialize-css
 */
import 'materialize-css/dist/css/materialize.min.css';
/**
 * importing Components
 */

import Accordion from '../../components/accordion/';

class App extends Component {
  
 render() {
     return <>
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Accordion.js</a>
                </div>
            </nav>
            <div className='container mt-4'>
            <ul className='collapsible'>
                <Accordion title='Home' icon='filter_drama' isOpen='true' >                
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Aenean metus eros, imperdiet tempus dictum sed, finibus sed eros. 
                   Vivamus luctus gravida condimentum. Quisque auctor risus id quam bibendum ultrices. 
                   In et augue urna. Curabitur efficitur risus nec nisl sagittis ursus sodales.
                </Accordion>
                <Accordion title='About Us' icon='whatshot'>
                    Lorem ipsum dolor sit amet 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
                </Accordion>
                <Accordion title='Contact Us' icon='place'>
                    Lorem ipsum dolor sit amet
                    
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus eros, 
                </Accordion>
             </ul>   
            </div>
     </>
 }

}
export default App;