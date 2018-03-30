import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      input: ''
    }
  }

  changeInput = (evt) => {
    this.setState({ input: evt.target.value })
  };

  appendToList = () => {
    const newList = this.state.toDoList.concat([this.state.input]);
    this.setState({ 
      input: '',
      toDoList: newList
    });
  };

  deleteItem = (selectedItem) => {
    console.log(selectedItem);
    const newList = this.state.toDoList.filter(item => selectedItem !== item );
    console.log(newList);
    this.setState({
      toDoList: newList
    })
  }


  render() {
    return (
      <div className="App">
        <h1 className="App-title">To Do List</h1>
        <Todolist list={this.state.toDoList} deleteItem={ this.deleteItem } />
        <input value= {this.state.input} onChange={this.changeInput} />
        <div onClick={this.appendToList}>Add Me</div>
      </div>
    );
  }
}

//Child component

const Todolist = ({ list, deleteItem }) => {
  return (
    <ul>
      {list.map((listItem, ind) => <li style={{ paddingTop: '6px', paddingBottom: '6px' }} key={ind} onClick={() => { deleteItem(listItem) } }> {listItem} </li>)}
    </ul>
  )
}

export default App;


// import React from 'react'

// const TodoItem = ({ todo }) => (
//   <span>{todo.name}</span>
// )

// const TodoList = ({ todos, addTodo }) => (
//   <ul>
//     {todos.map(todo => <li><TodoItem todo={todo}/></li>)}
//   </ul>
// )

// class TodoContainer extends React.Component {
//   constructor() {
//     super()

//     this.state = { todos = [] }
//   }

//   addTodo = () => {

//   }

//   render() {
//     return (
//       <div>
//          <button onClick={this.addTodo}>Add Todo</button>
//          <TodoList todos={this.state.todos} />
//       </div>
//     )
//   }
// }

// export default TodoContainer
