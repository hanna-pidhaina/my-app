import './App.css';
import Footer from "./Footer";
import InputSection from "./InputSection";
import CurrentWeatherSection from "./CurrentWeatherSection";
import ForecastSection from "./ForecastSection";


function App() {
  return (
    <div className="App">
      <div className="app-container">
        <InputSection />
        <CurrentWeatherSection />
        <ForecastSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
