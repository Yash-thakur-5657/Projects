import {Outlet} from 'react-router-dom'
import Header from './Components/Header.jsx'
import { useState } from 'react';
// import "./App.css";

export default function App() {
  const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <>
      <Header theme={[isDark,setIsDark]} />
      <Outlet context={[isDark]}/>
    </>
  );
}
