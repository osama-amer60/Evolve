import React from "react";
import Layout from "./components/layout/layout";
import Index from "../src/components/index";
import CreateSession from "../src/components/createSession";
import CreateUser from "../src/components/createUser";
import ShowSession from "../src/components/showSession";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="create-session" element={<CreateSession />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="show-session">
          <Route path=":id" element={<ShowSession />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
