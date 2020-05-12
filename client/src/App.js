import React from 'react';
import './App.css';
import Jobs from './components/Jobs';


const mockjobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 2', company: 'Facebook'},
  {title: 'SWE 3', company: 'Apple'},
]


function App() {
  return (
    <div className="App">
      <Jobs jobs = {mockjobs}/>
    </div>
  );
}

export default App;
