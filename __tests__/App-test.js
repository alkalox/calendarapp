import 'react-native';
import React from 'react';
import App from '../src/App';
import { render, fireEvent } from '@testing-library/react-native'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('app renders correctly', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
});

test('Calendar renders upon the calendar button being pressed', () => {
  const {debug, getByTestId, queryByTestId } = render(<App />)
  const calendarbutton = getByTestId('calendarbutton')
  // calendar component isn't rendered
  expect(queryByTestId('calendar')).toBeNull();
  fireEvent.press(calendarbutton)
  // assert that calendar component renders upon button being clicked
  expect(queryByTestId('calendar')).toBeTruthy();
})

test('Todays dateheading shows up by default', () => {
  const { getByTestId } = render(<App />)
  const dateheading = getByTestId('dateHeading').props.children
  const todaysDate = new Date().toDateString()
  expect(dateheading).toEqual(todaysDate)
})

test('Date is selected in Calendar and Events component shows up for it', () => {
  const { getByTestId, queryAllByTestId } = render(<App />)

  // press calendar btn to render calendar
  const calendarbutton = getByTestId('calendarbutton')
  fireEvent.press(calendarbutton)

  const testDate = '2020-11-15';
  
  // click on todays date button on the calendar
  const todaysDateBtn = getByTestId(`dayButton-${testDate}`)
  fireEvent.press(todaysDateBtn)

  // assert that events show up
  expect(queryAllByTestId('Events')).toBeTruthy()
  
})


