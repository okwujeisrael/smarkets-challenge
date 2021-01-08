import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Hero from './components/Hero';
import Homepage from './pages/Homepage';


const App = () => {
  const [popularIds, setPopularIds] = useState([]);

  const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/";

  // const test = [
  //   {
  //     id: '125567',
  //     name: 'Aston Villa vs Valencia FC',
  //     start_date: "2019-04-17",
  //     start_datetime: "2019-04-17T19:00:00Z",
  //     state: "ended"
  //   },
  //   {
  //     id: '125568',
  //     name: 'Aston Villa vs Valencia FC',
  //     start_date: "2019-04-17",
  //     start_datetime: "2019-04-17T19:00:00Z",
  //     state: "upcoming"
  //   },
    // {
    //   id: '125568',
    //   name: 'Aston Villa vs Valencia FC',
    //   start_date: "2019-04-17",
    //   start_datetime: "2019-04-17T19:00:00Z",
    //   state: "upcoming"
    // },
    // {
    //   id: '125568',
    //   name: 'Aston Villa vs Valencia FC',
    //   start_date: "2019-04-17",
    //   start_datetime: "2019-04-17T19:00:00Z",
    //   state: "upcoming"
    // }
  // ]

  const getPopularIds = async () => {
    const response = await axios.get(`${baseUrl}/popular/event_ids/sport/football/`);
    const { popular_event_ids } = response.data;
    setPopularIds(popular_event_ids);
  }

  useEffect(() => {
    getPopularIds();
  }, []);

  return (
    <div className="bg-black w-screen min-h-screen">
      <Hero />
      <Homepage popularIds={popularIds} />
    </div>
  )
}

export default App;
