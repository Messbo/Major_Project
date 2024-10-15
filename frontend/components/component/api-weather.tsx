"use client"; // Mark this component as a Client Component

import { useEffect, useState } from 'react';

interface WeatherData {
  weather: { description: string }[];
  main: { temp: number };
  name: string;
}

export const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3c21ee0b4e1b36cf8c4c95c72af595d7&units=metric`
              );

              if (!response.ok) {
                throw new Error('Failed to fetch weather data.');
              }

              const data: WeatherData = await response.json();
              setWeather(data);
            } catch (err) {
              setError(err instanceof Error ? err.message : 'An error occurred.');
            } finally {
              setLoading(false);
            }
          },
          () => {
            setError('Geolocation is not enabled.');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Weather Condition</h2>
      <p>{weather?.weather[0].description}</p>
      <p>Temperature: {weather?.main.temp} °C</p>
      <p>Location: {weather?.name}</p>
    </div>
  );
};
