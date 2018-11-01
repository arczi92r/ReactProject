import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    <ToDoList title='My to do list' tasks={['samochod', 'telefon']} ></ToDoList>
      </div>
    );
  }
} 
class ToDoListItem extends Component{
  static defaultProps = {
    done:true
  }
  
  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.setState({done: !this.state.done})
  }
  render() {
    const text = this.props.task;
    console.log(text);
    return (
      <div onClick={this.toggleDone} className={this.state.done ? 'doneToDo' : '' }>
      <p>
        
        {text}
      </p>
      </div>
    );
  }
}
class ToDoList extends Component{
  state = {
    tasks: this.props.tasks,
    draft:''
  };
  addToList = () =>{
    //const {tasks, draft} = this.state;

  let list = this.state.tasks;
  list.push(this.state.draft);

  this.setState({tasks: list , draft:''});
 
  }
  
 updateDraft = event => {
    console.log(event.target.value);
      this.setState({draft:event.target.value});
  }
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        {this.state.tasks.map(task => <ToDoListItem task={task}></ToDoListItem>)}
        <input type="text" onChange={this.updateDraft} value={this.state.draft}/>
        <input type="button" value="add" onClick={this.addToList} />
        </div>
    )
  }
}
export default App;
