import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('<Card />', () => {
  let component;

  const popularEvent = {
    id: '123456',
    name: 'Aston Villa vs Liverpool',
    start_date: '2021-01-08'
  };

  const handleClick = jest.fn();

  beforeEach(() => {
    component = render(
      <Card popularEvent={popularEvent} handleClick={handleClick} />
    );
  })

  test('Card renders correct content', () => {
    const eventName = component.container.querySelector('.event-name');
    const eventDate = component.container.querySelector('.event-date');
  
    expect(eventName).toHaveTextContent(popularEvent.name);
    expect(eventDate).toHaveTextContent(popularEvent.start_date);
  });

  test('Clicking a card calls an event handler', () => {
    const card = component.container.querySelector('.card');
    fireEvent.click(card);
    expect(handleClick.mock.calls).toHaveLength(1);
  });
});
