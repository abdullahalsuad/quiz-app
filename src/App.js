import Layout from "./component/Layout";
import Home from "./component/pages/Home";
import Signup from "./component/pages/Signup";

import "./styles/App.css"

function App() {
  return (
    <Layout>
        <Home />
        <Signup />
    </Layout >
  );
}

export default App;
