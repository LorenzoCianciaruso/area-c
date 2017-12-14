import React, { Component } from 'react';
import isAreaCActiveToday from '../service/get-is-active.js'
import '../App.css';

class IsActive extends Component {

  constructor(){
    super();
    this.state = {
      answer: '',
    };

    isAreaCActiveToday().then( (isActive) => {
      if(isActive){
        this.setState({answer: 'Sì'});
      }else{
        this.setState({answer:'No'});
      }
    });
  }

  render() {
    return (
      <p className="answer">{this.state.answer}</p>
    );
  }
}

export default IsActive;
