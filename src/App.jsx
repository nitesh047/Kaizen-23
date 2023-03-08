import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/navbar";

import Footer from "./components/Footer/footer";
import Home from "./components/home/home";
import RegisterSuccess from './components/Form/RegisterSuccess';
import EventsPage from './components/EventPage/eventPage'
import AllEvents from './components/AllEvents/AllEvents'
import KaizenForm from "./components/Form/KaizenForm";
import Data from "./components/DataPage/data";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/events" element={<AllEvents/>} />
          <Route path="/registersuccess" element={<RegisterSuccess/>} />
          <Route path="/form/:id" element={<KaizenForm />} />
          <Route path="/s0ws_n7ue_mi21s" element={<Data />} />
          <Route path="/:id" element={<EventsPage/>} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
