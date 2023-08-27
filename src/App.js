import React from "react";
import Layout from "./components/layout/layout";
import Index from "../src/components/index";
import CreateSession from "../src/components/createSession";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="create-session" element={<CreateSession />} />
      </Routes>
    </Layout>
  );
}

export default App;
