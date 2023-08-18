import "./App.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./Componentes/Layout";
import Home from "./Componentes/Home";
import FormContact from "./Componentes/FormContact";
import Me from "./Componentes/Me";

import { ServicesDetail } from "./Componentes/ServiceDetail";

import { ServiceList } from "./Componentes/ServiceList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<FormContact />} />
        <Route path="services" element={<ServiceList />} />
        <Route path="services/:serviceId" element={<ServicesDetail />} />
        <Route path="me" element={<Me />} />
      </Route>
    </Routes>
  );
}

export default App;
