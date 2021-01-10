import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';
import Modal from '../components/Modal';
import Loading from '../components/Loading';

const Homepage = ({ popularIds }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [popularEvents, setPopularEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3";

  const getPopularEvents = () => {
    const listOfEvents = [];
    
    popularIds.forEach(async (id, index) => {
      const url = `${baseUrl}/events/${id}`;
      const response = await axios.get(url);

      const { events } = response.data;
      listOfEvents.push(...events);
      if (index === popularIds.length - 1) setIsLoading(false);
    });

    setPopularEvents(listOfEvents);
  }

  useEffect(() => {
    getPopularEvents();
  // eslint-disable-next-line 
  }, [popularIds]);


  const toggleModal = () => {
    setIsModalShown(!isModalShown);
  };

  const handleClick = ({ target }) => {
    const id = target.id ? target.id : target.parentElement.id;
    toggleModal();
    const selected = popularEvents.filter(popularEvent => (popularEvent.id === id))
    setSelectedEvent(selected);
  }

  return (
    <section className="w-screen flex flex-col items-center">
      {
        isLoading ? <Loading /> : popularEvents.map(popularEvent => (
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
    </section>
  );
};

export default Homepage;
