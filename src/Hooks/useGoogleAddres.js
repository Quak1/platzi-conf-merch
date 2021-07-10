import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddres = (address) => {
  const [map, setMap] = useState({});
  const API_KEY = 'AIzaSyDF6G-P0oOgoijFQcFKl-4d7Gt9oEIRRy4';
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  console.log(API);
  useEffect(async () => {
    const response = await axios(API);
    console.log(response);
    setMap(response.data.results[0].geometry.location);
  }, []);
  console.log(map);
  return map;
};

export default useGoogleAddres;
