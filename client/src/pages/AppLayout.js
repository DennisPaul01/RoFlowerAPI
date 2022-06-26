import React from "react";
import Header from "../components/Header";
import EndPointsPage from "./EndpointsPage";
import IntroductionPage from "./IntroductionPage";
import JavascriptExamplePage from "./JavascriptExamplePage";
import { Routes, Route } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IntroductionPage />} />
        <Route path="endpoints" element={<EndPointsPage />} />
        <Route path="javascript" element={<JavascriptExamplePage />} />
        <Route path="*" element={<IntroductionPage />}></Route>
      </Routes>
    </>
  );
};

export default AppLayout;
