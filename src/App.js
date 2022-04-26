import { useState } from "react";
import "./App.css";
import firebase from './firebase.js';

function App() {
  const [appState, setAppState] = useState({
    currentItem: "",
    username: "",
  });

  function handleChange(e) {
    console.log(e.target)
    setAppState({
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: appState.currentItem,
      user: appState.username
    }
    itemsRef.push(item);
    setAppState({
      currentItem: '',
      username: ''
    });
  }

  return (
    <div className="app">
      <header>
        <div className="wrapper">
          <h1>Fun Food Friends</h1>
        </div>
      </header>
      <div className="container">
        <section className="add-item">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="What's your name?"
            />
            <input
              type="text"
              name="currentItem"
              placeholder="What are you bringing?"
            />
            <button>Add Item</button>
          </form>
        </section>
        <section className="display-item">
          <div className="wrapper">
            <ul></ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
