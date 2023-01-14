import EventCard from '../components/EventCard'
import EventCard2 from '../components/EventCard2'
import Alert from '../components/Alert'

const generateEventCards = ( {events, error} ) => {
    
    const eventCards = events ? events.map((event) => {
        return {
          fromDateTime: new Date(event.fromDateTime),
          toDateTime: new Date(event.toDateTime),
          title: event.title,
          category: event.category,
          location: event.location,
          price: event.price
        }
      }).filter(event => event.fromDateTime > new Date())
        .sort((event1, event2) => event1.fromDateTime - event2.fromDateTime)
        .map((fe, index) => {
          return (
            <EventCard 
                key={index}
                {...fe}
              />
          );
        })
        : <Alert message={error} type="warning" />;

    return eventCards;
}

export function generateEventCards2( {events, error} ){
    
  const eventCards = events ? events.map((event) => {
      return {
        fromDateTime: new Date(event.fromDateTime),
        toDateTime: new Date(event.toDateTime),
        title: event.title,
        category: event.category,
        location: event.location,
        location_map_url: event.location_map_url,
        price: event.price
      }
    }).filter(event => event.fromDateTime > new Date())
      .sort((event1, event2) => event1.fromDateTime - event2.fromDateTime)
      .map((fe, index) => {
        return (
          <EventCard2 
              key={index}
              {...fe}
            />
        );
      })
      : <Alert message={error} type="warning" />;

  return eventCards;
}


export default generateEventCards