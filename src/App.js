import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoListItem from './components/ToDoListItem/index.js';
import LifeCyccleCompoent from './components/LifeCycleCompoent/LifeCycelCompoent.js'

// alternatywny sposób na tworzenie komponentów , 
//functional components , simple componentnst

const NewToDoForm = (props) => (
  <div>
  <input type="text" onChange={props.onChange} value={props.draft}/>
        <input type="button" value="add" onClick={props.onSubmit2} />
  </div> 

);

class App extends Component {
  myTasks =  [{text:'samochod', done:false}];
   
  render() {
    return (
      <div className="App">
      <ToDoList title='My to do list' tasks={this.myTasks}></ToDoList>
      <LifeCyccleCompoent/>
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
    const {tasks, draft} = this.state;
    let list = tasks;
   list.push({text:draft, done:false});
   this.setState({tasks: list , draft:''});
 
  }
  
 updateDraft = event => {
    console.log(event.target.value);
      this.setState({draft:event.target.value});
  }
  render() {
    const {title}  = this.props;
    const {tasks, draft} = this.state;
        
    return(
      <div>
        <h1>{title}</h1>
        {tasks.map(task => <ToDoListItem text={task.text} done={task.done}/> )}
        <NewToDoForm onSubmit2={this.addToList} onChange={this.updateDraft} draft={draft} />
        </div>
    )
  }
}
export default App;
