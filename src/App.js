import "./App.css";
import HomePage from "./page/Home";
import Navigation from "./component/Navbar";
import "./stylesheet/stylesheet.css";
function App() {
  return (
    <div>
      <div className="bgMovie">
        <Navigation />
        <HomePage />;
      </div>
    </div>
  );
}

export default App;
