import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";
import Modal from "../components/Modal";

const Homepage = ({ popularIds }) => {
  const [isModalShown, setIsModalShown] = useState(true);
  const [popEvents, setEvents] = useState([]);

  const toggleModal = () => {
    setIsModalShown(false);
  };

  const getPopularEvents = async (popularIds) => {
    console.log(popularIds);
    const eventsArray = [];
    const url = `https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3/events/${popularIds[0]}`;
    const response = await axios.get(url);
    const { events } = response.data;
    debugger;
    eventsArray.push(events);
    setEvents(eventsArray);
  };

  useEffect(() => {
    getPopularEvents(popularIds);
    // getPopularEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-screen flex flex-col items-center">
      <Card />
      <Card />
      {/* <Modal toggleModal={toggleModal} isModalShown={isModalShown} /> */}
      {/* {console.log(popularIds)} */}
    </section>
  );
};

export default Homepage;
