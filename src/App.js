import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from './components/Hero';
// import { baseUrl } from './services/api';
import Homepage from './pages/Homepage';


const App = () => {
  const [popularIds, setPopularIds] = useState([]);
  const [events, setEvents] = useState([]);

  const getPopularIds = async () => {
    const response = await axios.get("https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/popular/event_ids/sport/football/");
    const { popular_event_ids } = response.data;
    setPopularIds(popular_event_ids);
  }

  const getPopularEvents = () => {
    const arrayOfEvents = [];
    popularIds.forEach( async id => {
      const url = `https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${id}`;
      const response = await axios.get(url);
      const { events } = response.data;
      arrayOfEvents.push(events);
    })
    setEvents(arrayOfEvents);
  }

  useEffect(() => {
    getPopularIds();
  }, []);

  useEffect(() => {
    getPopularEvents()
    console.log(events);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events,popularIds])

  return (
    <div className="bg-black h-screen w-screen">
      <Hero />
      <Homepage popularIds={popularIds} />
    </div>
  )
}

export default App;
