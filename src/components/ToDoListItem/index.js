import React, { Component } from 'react';
import './app.css';

class ToDoListItem extends Component{
    static defaultProps = {
      done:false
    }
    state = {
      done: this.props.done,
      text: this.props.text
    }
  
    toggleDone = () => {
      this.setState({done: !this.state.done})
    }


    render() {
      //const {text} = this.props.text;
     // const  done = this.props.done;

      
      return (
        <div onClick={this.toggleDone} className={this.state.done ? 'doneToDo' : '' }>
        <p> {this.state.text}</p>
        </div>
      );
    }
  }
  export default ToDoListItem;