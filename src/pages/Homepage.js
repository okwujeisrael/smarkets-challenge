import React, { useState } from "react";

import Card from "../components/Card";
import Modal from "../components/Modal";

const Homepage = ({ popularIds }) => {
  const [isModalShown, setIsModalShown] = useState(false);

  const toggleModal = () => {
    setIsModalShown(false);
  };

  return (
    <section className="w-screen flex flex-col items-center">
      <Card />
      <Card />
      <Modal toggleModal={toggleModal} isModalShown={isModalShown} />
    </section>
  );
};

export default Homepage;
