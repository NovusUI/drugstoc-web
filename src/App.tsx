import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services";
import Partnership from "./pages/Partnership";
import AboutUs from "./pages/About";
import Learning from "./pages/learning";
import Career from "./pages/Career";
import Pillometer from "./pages/Products/Pillometer/Pillometer";
import DrugstocPay from "./pages/Products/DrugstocPay/DrugstocPay";
import Medina from "./pages/Products/Medina/Medina";




const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/partnership" element={<Partnership/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/learning" element={<Learning/>}/>
          <Route path="/careers" element={<Career/>}/>
          <Route path="/products/pillometer" element={<Pillometer/>}/>
          <Route path="/products/drugstocpay" element={<DrugstocPay/>}/>
          <Route path="/products/medina" element={<Medina/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
