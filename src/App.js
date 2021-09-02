import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div className="main">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
};

export default App;
