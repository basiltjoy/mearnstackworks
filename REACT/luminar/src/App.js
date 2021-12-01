import './App.css';
import Random from './Random';
import { useState } from "react"

function App() {
  const name = "ABCD"

  return (
    <div className="App">
      <Random value={name} />
    </div>

  );
}


export default App;

