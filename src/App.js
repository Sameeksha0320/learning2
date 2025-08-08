import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> To-do List</h1>
        <h3>Dated : 08-08-2025</h3>
      </header>
    <div className="sidebar"> 
      <p> Things to be done today</p>
      <ul>
          <li>Hit the Gym </li>
          <li>Go to College</li>
          <li>Practice Coding</li>
          <li>Practice dance</li>
        </ul> </div>
      <img src="logo111.jpg" alt="My Logo" className="corner-image" />


    </div>
  );

}

export default App;
