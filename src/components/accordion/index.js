import React, { Component } from 'react';
import './styles.css';

class Accordion extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: this.props.isOpen
        }
    }
    clickHandler= () =>{
        
        this.setState({
            isOpen: !this.state.isOpen
            
        })
    }
render() {
    const { title, icon, children} = this.props;
    const {isOpen}=this.state; 
    return <>
       
            <li>
                <div className="accordion-header"  onClick={this.clickHandler} >
                    <i className="material-icons">{icon}</i>{title}
                </div >
                <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                     <span>{children}</span>
                </div>
            </li>
        
    
    </>
}
}
export default Accordion;