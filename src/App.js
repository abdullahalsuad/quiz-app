/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Quiz from "./component/pages/Quiz";
import Signup from "./component/pages/Signup";
import Result from "./component/pages/Result";
import {AuthProvider} from "./context/AuthContext";
import "./styles/App.css"
import NotFound from "./component/pages/NotFound";
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';

function App() {
  return (
        <AuthProvider>
        <Layout>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
              <Route path="/login"element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute>} />
              <Route path="/result/:id" element={<PrivateRoute><Result /></PrivateRoute>} /> 
              <Route path="*" element={ <NotFound/>} />   
          </Routes>
        </Layout >
        </AuthProvider> 
  );
}

export default App;
