import { useState } from "react";
import "./App.css";
import { fetchWeather, type WeatherDatas } from "./services/WeatherData";

function App() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherDatas | null>(null);

  const handleFetchWeather = async () => {
    if (!city) return;
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="container">
      <h1>Consulta de Clima</h1>
      <input
        type="text"
        placeholder="Digite a cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleFetchWeather}>Buscar</button>

      {weather && !weather.error && (
        <div className="result">
          <p><strong>Cidade:</strong> {weather.city}</p>
          <p><strong>Temperatura:</strong> {weather.temperature} °C</p>
          <p><strong>Umidade:</strong> {weather.humidity} %</p>
        </div>
      )}

      {weather?.error && <p className="error">{weather.error}</p>}
    </div>
  );
}

export default App;
