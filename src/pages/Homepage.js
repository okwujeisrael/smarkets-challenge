import React, { useState } from "react";

import Card from "../components/Card";
import Modal from "../components/Modal";

const Homepage = ({ popularEvents }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState([]);

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
    </section>
  );
};

export default Homepage;
