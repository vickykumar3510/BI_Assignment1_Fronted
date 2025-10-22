import { useState } from 'react'
import useFetch from '../useFetch'
import Header from './components/Header'
import EventType from './components/ByEventType'
import { Link } from "react-router-dom"

const App = () => {
  const { data = [], loading, error } = useFetch("https://bi-assignment1-backend-gamma.vercel.app/dashboard")
  const [currentEvent, setCurrentEvent] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEvents = data
  ? data.filter(event => {
      const search = searchTerm.toLowerCase();
      const inTitle = event.title.toLowerCase().includes(search);
      const inTags = event.tags
        ? (Array.isArray(event.tags)
            ? event.tags.some(tag => tag.toLowerCase().includes(search))
            : event.tags.toLowerCase().includes(search)) 
        : false;
      const matchesEventType = !currentEvent || event.eventType === currentEvent;
      return matchesEventType && (inTitle || inTags);
    })
  : [];

  return (
    <main className="bg-body-secondary min-vh-100 py-4">
      <div className='container-fluid'>
        <div className='container'>
      <Header onSearch={setSearchTerm} />
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mb-4">
      <p className="fs-1 mb-0 text-md-start text-center text-nowrap">Meetup Events</p>
      <EventType currentEvent={currentEvent} setCurrentEvent={setCurrentEvent} />
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p>An error occurred while fetching the meetings.</p>}

      <div className="row">
        {filteredEvents && filteredEvents.length > 0 ? (
          filteredEvents.map((m) => (
            <div className="col-12 col-sm-6 col-lg-4" key={m._id}>
              <div className="card my-3 shadow-sm border-0 p-2">
                <div className='px-3 pt-3 text-muted fs-6'>{m.eventType}</div>
                <Link to={
                    m.title === "Tech Conference"
                      ? "/techConference"
                      : m.title === "Marketing Seminar"
                      ? "/marketingSeminar"
                      : m.title === "Design Workshop"
                      ? "/designWorkshop"
                      : m.title === "Conference 1"
                      ? "/conference1"
                      : m.title === "Conference 2"
                      ? "/conference2"
                      : m.title === "Conference 3"
                      ? "/conference3"
                      : "/"
                  }><img
                  src={m.image}
                  alt={m.title}
                  style={{ height: "200px", objectFit: "cover", width: "100%" }} className='img-fluid rounded-top'
                /></Link>
                <div className="text-body-secondary">{m.date}</div>
                <strong className='h5'>{m.title}</strong>
              </div>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
      </div>
      </div>
    </main>
  )
}

export default App
