import React, { useState, useEffect } from "react";
import axios from 'axios';

import Card from "../components/Card";
import Modal from "../components/Modal";

const Homepage = ({ popularIds }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const [ids, setIds] = useState([]);

  const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3";

  // const getPopularEvents = () => {
  //   console.log(popularIds, 'inside function');
  //   const listOfEvents = [];
  //   popularIds.forEach(async id => {
  //     const url = `${baseUrl}/events/${id}`;
  //     const response = await axios.get(url);

  //     const { events } = response.data;
  //     listOfEvents.push(...events);
  //   });
  //   setPopularEvents(listOfEvents);
  // }

  useEffect(() => {
    // getPopularEvents();
    setIds(popularIds);
    console.log(ids, 'inside function');
    const listOfEvents = [];
    ids.forEach(async id => {
      const url = `${baseUrl}/events/${id}`;
      const response = await axios.get(url);

      const { events } = response.data;
      listOfEvents.push(...events);
    });
    setPopularEvents(listOfEvents);
  }, [ids, popularIds]);

  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };

  const handleClick = ({ target }) => {
    const id = target.id ? target.id : target.parentElement.id;
    toggleModal();
    const selected = popularEvents.filter(popularEvents => (popularEvents.id === id))
    setSelectedEvent(selected);
  }

  return (
    <section className="w-screen flex flex-col items-center">
      {
        popularEvents.map(popularEvent => (
          <Card 
            popularEvent={popularEvent} 
            key={popularEvent.id}
            handleClick={handleClick}
          />
        ))
      }
      <Modal 
        toggleModal={toggleModal} 
        isModalShown={isModalShown}
        selectedEvent={selectedEvent}
      />
      {console.log(ids, 'inside jsx')}
      {console.log(popularEvents, 'inside jsx')}
    </section>
  );
};

export default Homepage;
