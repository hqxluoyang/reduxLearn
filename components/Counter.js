import React, { Component, PropTypes } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import Message from './Message';

import test from '../css/testLess.less'
import testcss from '../css/test.css'

class Counter extends Component {
  
  click(){
    alert("hehe")
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
    <div>
       
        <RaisedButton onClick={this.click} label="Default" />
        <Message />
      </div>
    )
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

export default Counter
