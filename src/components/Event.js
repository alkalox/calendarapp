import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Event = ({time, name, title}) => {
  return (
  <>
    <View style = {styles.viewStyle} testID = "Events">
      <View style = {styles.horizontalView} />
      <View style = {styles.textView}>
        <Text style = {{fontSize: 13, color: '#74747b'}}>
          {time}
        </Text>
        <Text style = {{fontSize: 22, fontWeight: 'bold', color: '#505050'}}>
          {name}
        </Text>
        <Text style = {{fontSize: 18, color: '#505050'}}>
          {title}
        </Text>
      </View>
    </View>
    <View style = {styles.divider} />
  </>
  )
}

export default Event

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection:'row', 
    marginTop: 20, 
    height: 90, 
    width: '100%',
  },
  horizontalView: {
    flex: 1,
    backgroundColor:'#518de7',
  },
  textView: {
    flex: 30,
    paddingLeft: 20, 
    justifyContent: 'space-between',
  },
  divider: {
    height: 1, 
    backgroundColor: '#959595', 
    marginTop: 20,
  }
})

