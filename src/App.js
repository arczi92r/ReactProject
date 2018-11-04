import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoListItem from './components/ToDoListItem/index.js';


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
    console.log("siemka");
    const {tasks, draft} = this.state;
    console.log(this.state.tasks);

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
