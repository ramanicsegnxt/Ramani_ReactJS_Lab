import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import ShowData from './components/ShowList';
function App() {
  return (
    <div className="App">
     {/* <h1>Expense tracker coming up</h1> */}
     <Router>
           <Routes>
                 <Route path='/' element={< ShowData />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
