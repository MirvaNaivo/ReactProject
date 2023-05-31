import React from 'react';
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import  Project  from './project';
import  {AddDog}  from './pages/add';
import { Remove } from './pages/remove';
import { Schedule } from './pages/schedule';
import { Edit } from './pages/edit';
import { Feedback } from './pages/feedback';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Project/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/add" element={<AddDog/>} />
        <Route path="/remove" element={<Remove/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
