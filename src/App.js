/* eslint-disable no-unused-vars */
import Layout from "./component/Layout";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Quiz from "./component/pages/Quiz";
import Signup from "./component/pages/Signup";
import Result from "./component/pages/Result"

import "./styles/App.css"

function App() {
  return (
    <Layout>
        {/* <Home />
        <Signup /> 
        <Login /> 
        <Quiz /> */}
        <Result />
    </Layout >
  );
}

export default App;
