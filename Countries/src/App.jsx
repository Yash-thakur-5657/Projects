import {Outlet} from 'react-router-dom'
import Header from './Components/Header.jsx'
import { useState } from 'react';
import {ThemeProvider } from '../contexts/ThemeContext.jsx';
// import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <Header/>
      <Outlet/>
    </ThemeProvider>
  );
}
