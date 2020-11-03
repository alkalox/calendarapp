import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const CalendarButton = ({onPress, showCalendar}) => {

  let icon = showCalendar ? require('../assets/up-arrow.png') : require('../assets/down-arrow.png')

  return (
    <TouchableOpacity 
      style = {styles.btnStyle}
      activeOpacity = {1}
      onPress = {onPress}
      testID={'calendarbutton'}
    >
      <View style = {styles.circle}>
        <Image
          style={{ width: 30, height: 30}}
          source={require('../assets/calendar.png')}
        />
      </View>
      <Text style = {styles.textStyle}>
        View full Calendar
      </Text>
      <Image
        style={{ width: 23, height: 23}}
        source={icon}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 70, 
    height: 70, 
    borderRadius: 20, 
    backgroundColor: '#000', 
    justifyContent: 'center', 
    alignItems:'center',
  },
  textStyle: {
    fontSize: 21,
    color: '#000',
    fontWeight: 'bold'
  },
  btnStyle: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  }
})


export default CalendarButton
