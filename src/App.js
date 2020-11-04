import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';

import CalendarButton from './components/CalendarButton'
import Event from './components/Event'
import Calendar from './components/Calendar'

import { markedDates, dataObj } from './utils/data'

getTodaysDate = () => {
  const date = new Date();
  let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
    .toISOString().split("T")[0];
  return dateString
}

const App = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  // date defaults to today, else it is the date selected by the user
  const [date, setDate] = useState(getTodaysDate())
  const [dateHeading, setDateHeading] = useState(null)
  
  useEffect(() => {
    setFormattedDate(date)
  }, [date])

  const setFormattedDate = (date) => {
    let datesplit = date.split("-")
    setDateHeading(new Date(datesplit[0], datesplit[1] - 1, datesplit[2]).toDateString())
  }

  return (
    <ScrollView style = {styles.container}>
      <CalendarButton
        onPress = {() => setShowCalendar(!showCalendar)}
        showCalendar = {showCalendar} 
      />

      {showCalendar && 
        <Calendar
          date={date} 
          markedDates={markedDates}
          setDate={setDate}
        />
      }
      <Text style = {styles.headingStyle} testID = "dateHeading">
        {dateHeading}
      </Text>

      {dataObj[date] ? 
        dataObj[date].map(({time, name, title}, index) => (
          <Event time={time} name={name} title ={title} key={index} /> 
        )) 
      :
        <Text style = {styles.altTextStyle} testID = "noEventsText">
          🤔 There are no events for this date.
        </Text>
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    flex: 1,
    padding: 20,
  },
  headingStyle: {
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#505050', 
    marginTop: 30
  },
  altTextStyle: {
    textAlign:'center', 
    marginTop: 50, 
    fontSize: 16
  }
})

export default App;
