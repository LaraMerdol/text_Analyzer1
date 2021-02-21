
import { getAllByDisplayValue } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Text area..',

        };
        var sum = 0;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        
        
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    handleSubmit = (event) => {

 
   

    } 
  
    

    render() {
        const numbers =parseInt( this.state.value.split(" ").map((word) => word.length).reduce((a, b) => a + b) / this.state.value.split(" ").length);


        return (
            <header style = {headerStyle}>

                <form onSubmit={this.handleSubmit}>
                   
                    <label for = "label0">
                  
                        <textarea value={this.state.value} onChange={this.handleChange} /> 
                    </label>
                    <label for="label1">
                    
                        <input type="submit" value="Reset" />

                    </label>
                    <div id="a">
                        Letter Count
                        <div> {this.state.value.length}</div>
                    </div>
                    <div id="b">
                        Word Count


                        <div> {this.state.value.split(" ").length}</div>
                    </div> 
                    <div id="c">
                        Average Word Length


                        <div> {numbers }</div>
                    </div>                   



                </form>
            </header>
        );
    }
}
const headerStyle ={
    background: '#456',
    color: '#fff',
    textAlign: 'center'
}

export default App;
