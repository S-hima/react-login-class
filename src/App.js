
import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {  
  const[ check, setCheck]= useState(false);
  return (
    <div className="container">
      <h1>Hello</h1>
      <Login />
      {/* <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

export default App;
