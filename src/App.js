import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from './components/Hero';
// import { baseUrl } from './services/api';
import Homepage from './pages/Homepage';


const App = () => {
  const [popularIds, setPopularIds] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);

  const getPopularIds = async () => {
    const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/football/");
    const { popular_event_ids } = response.data;
    setPopularIds(popular_event_ids);
  }

   const getPopularEvents = async () => {
    popularIds.forEach( async id => {
      const url = `https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${id}`;
      const response = await axios.get(url);

      const { events } = response.data;

      setPopularEvents([...popularEvents, events]);
    })
  }

  useEffect(() => {
    getPopularIds();
  }, []);

  useEffect(() => {
    getPopularEvents();
  }, [popularIds]);

  console.log(popularIds, 'foo');
  console.log(popularEvents, 'bar')

  return (
    <div className="bg-black h-screen w-screen">
      <Hero />
      {/* <Homepage popularIds={popularIds} /> */}
      {/* {console.log(events)}
      {console.log(popularIds)} */}
    </div>
  )
}

export default App;
