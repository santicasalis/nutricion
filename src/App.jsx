import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Componentes/home/Home";
import FormContact from "./Componentes/formContact/FormContact";
import ServiceList from "./Componentes/serviceList/ServiceList";
import ServicesDetail from "./Componentes/serviceDetail/ServiceDetail";
import Me from "./Componentes/me/Me";
import Navbar from "./Componentes/navbar/Navbar";
import Footer from "./Componentes/footer/Footer";
import WhatsApp from "./Componentes/whatsApp/WhatsApp";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<FormContact />} />
        <Route path="services" element={<ServiceList />} />
        <Route path="services/:serviceId" element={<ServicesDetail />} />
        <Route path="me" element={<Me />} />
      </Routes>
      <WhatsApp />
      <Footer />
    </>
  );
}

export default App;
