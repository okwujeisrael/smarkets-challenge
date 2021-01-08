import React from 'react';

const Card = ({ popularEvent, handleClick }) => {

  return (
    <div 
      className="card bg-black text-white w-8/12 h-28 border border-white rounded-lg p-4 m-4 cursor-pointer text-center animate__animated animate__slideInDown"
      id={popularEvent.id}
      onClick={handleClick}
    >
      <h3 className="text-green-600 ">FOOTBALL</h3>
      <p className="event-name">{popularEvent.name}</p>
      <p className="text-green-600 event-date">
        Start Date: {popularEvent.start_date}
      </p>
    </div>
  )
}

export default Card;
