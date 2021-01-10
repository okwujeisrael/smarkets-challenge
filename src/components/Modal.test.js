import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('<Modal />', () => {
  let component;

  const selectedEvent = [
    {
      id: '123456',
      name: 'Aston Villa vs Liverpool',
      start_date: '2021-01-08',
      start_datetime: '2019-04-17T19:00:00Z',
      state: 'ended'
    }
  ];

  const closeModal = jest.fn();

  beforeEach(() => {
    component = render(
      <Modal         
        toggleModal={closeModal} 
        isModalShown={true}
        selectedEvent={selectedEvent} 
      />
    );
  })

  test('Modal renders correct content', () => {
    const eventName = component.container.querySelector('.event-name');
    const eventDate = component.container.querySelector('.start-date');
    const eventTime = component.container.querySelector('.start-time');

    const [event] = selectedEvent;

    expect(eventName).toHaveTextContent(event.name);
    expect(eventDate).toHaveTextContent(event.start_date);
    expect(eventTime)
      .toHaveTextContent(new Date(event.start_datetime).toLocaleTimeString('en-US'));


  });

  test('Clicking the modal calls an event handler', () => {
    const modal = component.container.querySelector('.modal');
    fireEvent.click(modal);
    expect(closeModal.mock.calls).toHaveLength(1);
  });
});
