import React from 'react';

const Modal = ({ isModalShown, toggleModal }) => {
  return (
    <>
      {isModalShown && (
        <div 
          className="fixed top-0 left-0 w-screen h-screen bg-black modal-background flex items-center justify-center cursor-pointer"
          onClick={toggleModal}
        >
          <div className="w-5/12 h-32 bg-white text-black p-4 rounded-lg flex justify-between items-center">
            <div>
              <h3 className="text-green-600 dosis-bold text-2xl">FOOTBALL</h3>
              <h4 className="dosis-bold">League name</h4>
              <p>Porto vs. Liverpool</p>     
            </div>
            <div className="flex flex-col justify-items-end">
              <p>Start Date: 2019-04-17</p>
              <p>Start Time: 19:40</p>
              <p className="text-red-400">Ended</p>
            </div>
          </div>
        </div> 
      )} 
    </>
  )
}

export default Modal;
