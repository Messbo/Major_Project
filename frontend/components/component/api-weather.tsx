// "use client"; // Mark this component as a Client Component

// import { useEffect, useState } from 'react';

// interface WeatherData {
//   weather: { description: string }[];
//   main: { temp: number };
//   name: string;
// }

// export const Weather: React.FC = () => {
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           async (position) => {
//             const { latitude, longitude } = position.coords;
//             try {
//               const response = await fetch(
//                 `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3c21ee0b4e1b36cf8c4c95c72af595d7&units=metric`
//               );

//               if (!response.ok) {
//                 throw new Error('Failed to fetch weather data.');
//               }

//               const data: WeatherData = await response.json();
//               setWeather(data);
//             } catch (err) {
//               setError(err instanceof Error ? err.message : 'An error occurred.');
//             } finally {
//               setLoading(false);
//             }
//           },
//           () => {
//             setError('Geolocation is not enabled.');
//             setLoading(false);
//           }
//         );
//       } else {
//         setError('Geolocation is not supported by this browser.');
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Weather Condition</h2>
//       <p>{weather?.weather[0].description}</p>
//       <p>Temperature: {weather?.main.temp} °C</p>
//       <p>Location: {weather?.name}</p>
//     </div>
//   );
// };
"use client"; // Mark this component as a Client Component

import { useEffect, useState } from 'react';

interface WeatherData {
  weather: { description: string }[];
  main: { temp: number };
  name: string;
}

const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Surat"
];

export const Weather: React.FC = () => {
  const [userWeather, setUserWeather] = useState<WeatherData | null>(null);
  const [cityWeather, setCityWeather] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // Fetch user's location weather
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=3c21ee0b4e1b36cf8c4c95c72af595d7&units=metric`
              );

              if (!response.ok) {
                throw new Error('Failed to fetch user weather data.');
              }

              const data: WeatherData = await response.json();
              setUserWeather(data);
            } catch (err) {
              setError(err instanceof Error ? err.message : 'An error occurred.');
            }
          },
          () => {
            setError('Geolocation is not enabled.');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }

      // Fetch weather for major cities
      try {
        const cityWeatherPromises = cities.map(city =>
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=3c21ee0b4e1b36cf8c4c95c72af595d7&units=metric`)
            .then(response => {
              if (!response.ok) {
                throw new Error(`Failed to fetch weather for ${city}.`);
              }
              return response.json();
            })
        );

        const cityWeatherData = await Promise.all(cityWeatherPromises);
        setCityWeather(cityWeatherData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching city weather.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="p-4 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Current Weather</h2>
      {userWeather && (
        <div className="mb-6 p-4 border rounded-lg bg-white shadow">
          <h3 className="text-xl">{userWeather.name}</h3>
          <p className="text-gray-700">Condition: {userWeather.weather[0].description}</p>
          <p className="text-gray-700">Temperature: {userWeather.main.temp} °C</p>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-6 mb-4">Weather in Major Cities of India</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cityWeather.map((city, index) => (
          <div key={index} className="p-4 border rounded-lg bg-white shadow">
            <h3 className="text-xl">{city.name}</h3>
            <p className="text-gray-700">Condition: {city.weather[0].description}</p>
            <p className="text-gray-700">Temperature: {city.main.temp} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
};
