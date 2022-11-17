import './App.css';
import axios from "axios";
import Footer from "./Footer";
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Weather />
      </div>
      <Footer />
    </div>
  );
}

