import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import { Contactus } from './components/Contactus';

function App() {
  return (
    <>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Aboutus" element={<Aboutus />}></Route>
    <Route path="/Contactus" element={<Contactus />}></Route>
  </Routes></>
  );
}

export default App;
