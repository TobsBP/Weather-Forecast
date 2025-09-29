export interface WeatherDatas {
  city: string;
  temperature: number;
  humidity: number;
  error?: string;
}

const API_URL = "http://localhost:8000";

export async function fetchWeather(city: string): Promise<WeatherDatas> {
  try {
    const response = await fetch(`${API_URL}/weather?city=${encodeURIComponent(city)}`);
    if (!response.ok) throw new Error("Erro ao buscar clima");
    return await response.json();
  } catch (error: any) {
    return { city, temperature: 0, humidity: 0, error: error.message };
  }
}
