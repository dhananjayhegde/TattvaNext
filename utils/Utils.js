
import EventCard from '../components/EventCard'
import Alert from '../components/Alert'

const generateEventCards = ( {events, error} ) => {
    
    const eventCards = events ? events.map((event) => {
        return {
          fromDateTime: new Date(event.fromDateTime),
          toDateTime: new Date(event.toDateTime),
          title: event.title,
          category: event.category,
          location: event.location
        }
      }).filter(event => event.fromDateTime > new Date())
        .sort((event1, event2) => event1.fromDateTime - event2.fromDateTime)
        .map((fe, index) => {
          return (
            <EventCard 
                key={index}
                fromDateTime={fe.fromDateTime}
                toDateTime={fe.toDateTime}
                title={fe.title}
                location={fe.location}
                category={fe.category} />
          );
        })
        : <Alert message={error} type="warning" />;

    return eventCards;
}


export default generateEventCards