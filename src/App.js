import React from "react";
import Layout from "./components/layout/layout";
import Index from "../src/components/index";
import CreateSession from "../src/components/createSession";
import EditSession from "../src/components/editSession";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="create-session" element={<CreateSession />} />
        <Route path="edit-session">
          <Route path=":id" element={<EditSession />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
