import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "../components/Header";
import EndPointsPage from "./EndpointsPage";
import IntroductionPage from "./IntroductionPage";
import JavascriptExamplePage from "./JavascriptExamplePage";
import DesginElements from "../components/DesignElements";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="endpoints" element={<EndPointsPage />} />
        <Route path="javascript" element={<JavascriptExamplePage />} />
        <Route path="*" element={<IntroductionPage />}></Route>
      </Routes>
      <DesginElements></DesginElements>
    </div>
  );
};

export default AppLayout;
