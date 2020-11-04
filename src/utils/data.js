
//Fake data
export const dataObj = {
  "2020-11-03": [{
    "name":"Jonathan",
    "title": "Building habits",
    "time": "10:00 AM - 10:30 AM",
  }, 
  {
    "name":"Joe",
    "title": "Journalling session",
    "time": "06:00 PM - 07:00 PM",
  }],
  "2020-11-04": [{
    "name":"John",
    "title": "Mindfulness Session",
    "time": "8:00 AM - 8:30 AM",
  }, {
    "name":"Brad",
    "title": "Reading Session",
    "time": "08:00 PM - 08:30 PM",
  }],
  "2020-11-15": [{
  "name":"Joe",
  "title": "Journalling session",
  "time": "06:00 PM - 07:00 PM",
  }, {
    "name":"Jonathan",
    "title": "Building habits",
    "time": "10:00 AM - 10:30 AM",
  }],
  "2020-11-11": [{
   "name":"Brad",
   "title": "Reading Session",
   "time": "08:00 PM - 08:30 PM",
  }, {
    "name":"Donald",
    "title": "Mindfulness Session",
    "time": "8:00 AM - 8:30 AM",
  }],
}

const dataObjKeys = Object.keys(dataObj)

// Func used to generate object for custom markings of events on the calendar
const dateTemplate = (arr) => {
  let markedDateObj = {}
  arr.forEach((item) => {
    const obj = {
      [item]: {
        customStyles: {
          container: {
            backgroundColor: '#a4e67d',
          },
          text: {
            color: 'black'
          }
        }
      }
    }

    markedDateObj = {...markedDateObj, ...obj}

  })

  return markedDateObj

}

export const markedDates = dateTemplate(dataObjKeys)