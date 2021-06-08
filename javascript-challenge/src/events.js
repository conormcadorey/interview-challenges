/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/
const moment = require("moment"); 

const eventsArray = [
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  },
  {
    id: 108,
    startsAt: '2021-01-28T13:01:11Z', 
    endsAt: '2021-01-28T15:01:11Z', 
    title: 'Workout',
  },
  {
    id: 110,
    startsAt: '2021-01-30T13:01:11Z', 
    endsAt: '2021-01-30T15:01:11Z', 
    title: 'Shopping',
  },
  {
    id: 109,
    startsAt: '2021-01-28T13:01:11Z', 
    endsAt: '2021-01-28T15:01:11Z', 
    title: 'Study',
  }
]

const groupEventsByDay = (events) => {

  /*
  Attempted logic 
  1) Sort the events in ascending order by date using moment 
  2) reduce to events into a single object using reduce()
  3) work out the number-of-days difference between the events taking place, using moment to compare dates 
  4) assign the difference between days, starting with 0 as keys to the relevent events  
  */

  //sort events 
  //compare start date of each event to sort in acsending order 
  const sortedEvents = events.sort((firstEvent, secondEvent) => 
     moment(firstEvent.startsAt) - moment(secondEvent.startsAt)
  )

  let reduceEvents = sortedEvents.reduce((acc, currentEvent) => {

  }, {});

  //get days between each event
  //use returned values as keys 
  const daysBetweenEvents = (a, b) => {
    return result = moment(a.startsAt).diff(moment(b.startsAt), 'days');
  }

  //assign key to grouped events 
  return events;
};

console.log(groupEventsByDay(reduceEvents))


/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/
const moveEventToDay = (eventsByDay, id, toDay) => {
  return eventsByDay;
};
