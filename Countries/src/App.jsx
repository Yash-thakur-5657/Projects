import {Outlet} from 'react-router-dom'
import Header from './Components/Header.jsx'
// import "./App.css";

export default function App() {
  
  return (
    <>
      <Header />
      <Outlet/>
    </>
  );
}
