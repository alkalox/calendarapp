import React from 'react'
import { Calendar } from 'react-native-calendars';
import { Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CalendarComponent = ({date, markedDates, setDate}) => {
  return (
    <Calendar
      testID="calendar"
      style={{marginTop: 20}}
      current={Date()}
      // custom Day Component
      dayComponent={({date, state, marking}) => {
        const bgColor = marking?.customStyles?.container?.backgroundColor
        return (
          <TouchableOpacity
            testID = {`dayButton-${date.dateString}`}
            activeOpacity = {1}
            style = {[styles.dayComponentStyle, {backgroundColor: bgColor ? bgColor : 'lightgray'}]}
            onPress = {() => setDate(date.dateString)}
            disabled = {state === 'disabled'}
          >
            <Text 
              style={[styles.dayComponentTextStyle, { color: bgColor === 'black' ? 'white' : 'black'}]}>
              {state !== 'disabled' ? date.day : null}
            </Text>
          </TouchableOpacity>
        );
      }}
      monthFormat={'MMMM yyyy'}
      // Replace default arrows with custom ones
      renderArrow={(direction) => 
        direction === 'left' ? (
          <Image 
            style = {{width: 25, height: 25}}
            source={require('../assets/previous.png')} 
          />
        ) : 
        <Image 
          style = {{width: 25, height: 25}}
          source={require('../assets/next.png')} />
      }
      firstDay={1}
      // custom markings on calendar, used to color code today and dates which have events
      markingType={'custom'}
      markedDates={{
        ...markedDates,
        [date] : {
          customStyles: {
            container: {
              backgroundColor: 'black',
              elevation: 2
            },
            text: {
              color: 'white',
            }
          }
        }
      }}
      theme={{
        textMonthFontWeight: 'bold',
        textMonthFontSize: 20,
      }}
    />
  )
}

const styles = StyleSheet.create({
  dayComponentStyle: {
    borderRadius: 20,
    height: 30,
    width: 30,
    justifyContent:'center',
    alignItems:'center',
  },
  dayComponentTextStyle: {
    textAlign: 'center', 
    fontWeight:'bold'
  }
})


export default CalendarComponent
