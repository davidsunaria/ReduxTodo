import React, { useState } from "react";
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let mystore = createStore(function (state = [{ title: "default todo" }], action) {

  switch (action.type) {
    case "ADD":
      let newState = [...state];
      newState.push(action.payload)
      return newState
  }
  return state
})


function App() {
  return (
    <>
      <Provider store={mystore} >
        <AddTodo /> <br />
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
