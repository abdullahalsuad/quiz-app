/* eslint-disable no-unused-vars */
import { Route,Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Quiz from "./component/pages/Quiz";
import Signup from "./component/pages/Signup";
import Result from "./component/pages/Result"

import "./styles/App.css"
import NotFound from "./component/pages/NotFound";

function App() {
  return (
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login"element={<Login />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} /> 
              <Route path="*" element={ <NotFound/>} />   
          </Routes>
      </Layout >
  );
}

export default App;
