import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from './components/Hero';
import Homepage from './pages/Homepage';


const App = () => {
  const [popularIds, setPopularIds] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);

  const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3";

  const getPopularIds = async () => {
    const response = await axios.get(`${baseUrl}/popular/event_ids/sport/football/`);
    const { popular_event_ids } = response.data;
    setPopularIds(popular_event_ids);
  }

   const getPopularEvents = async () => {
    const listOfEvents = [];
    popularIds.forEach( async id => {
      const url = `${baseUrl}/events/${id}`;
      const response = await axios.get(url);

      const { events } = response.data;
      listOfEvents.push(...events);

      // setPopularEvents([...popularEvents, ...events]);
    });
    setPopularEvents(listOfEvents);
    console.log(listOfEvents, 'bar');
  }

  useEffect(() => {
    getPopularIds();
  }, []);

  useEffect(() => {
    getPopularEvents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popularIds]);


  return (
    <div className="bg-black h-screen w-screen">
      <Hero />
      <Homepage popularEvents={popularEvents} />
      {console.log(popularIds, 'foo')}
      {console.log(popularEvents, 'bar')}
    </div>
  )
}

export default App;
