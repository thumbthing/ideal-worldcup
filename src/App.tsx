import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Ideal from './pages/Ideal';
import Result from './pages/Result';
import Ranking from './pages/Ranking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/ideal" Component={Ideal} />
        <Route path="/result" Component={Result} />
        <Route path="/ranking" Component={Ranking} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
