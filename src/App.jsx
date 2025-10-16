import { useState } from 'react'
import useFetch from '../useFetch'
import Header from './components/Header'
import EventType from './components/ByEventType'
import { Link } from "react-router-dom"

const App = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/dashboard")
  const [currentEvent, setCurrentEvent] = useState("")

  const filteredEvents = currentEvent
    ? data.filter((event) => event.eventType === currentEvent)
    : data

  return (
    <main className="container bg-body-secondary">
      <Header />
      <div className="d-flex justify-content-between align-items-center mb-3">
      <p className="h1">Meetup Events</p>
      <EventType currentEvent={currentEvent} setCurrentEvent={setCurrentEvent} />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>An error occurred while fetching the meetings.</p>}

      <div className="row">
        {filteredEvents && filteredEvents.length > 0 ? (
          filteredEvents.map((m) => (
            <div className="col-4" key={m._id}>
              <div className="card my-4">
                <div>{m.eventType}</div>
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
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                /></Link>
                <div>{m.date}</div>
                <strong>{m.title}</strong>
              </div>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </main>
  )
}

export default App
