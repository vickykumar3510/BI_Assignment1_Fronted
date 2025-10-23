import { useState } from "react"
import useFetch from "../useFetch"
import Header from "./components/Header"
import EventType from "./components/ByEventType"
import { Link } from "react-router-dom"

const App = () => {
  const { data = [], loading, error } = useFetch(
    "https://bi-assignment1-backend-gamma.vercel.app/dashboard"
  )
  const [currentEvent, setCurrentEvent] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredEvents = data
    ? data.filter((event) => {
        const search = searchTerm.toLowerCase()
        const inTitle = event.title.toLowerCase().includes(search)
        const inTags = event.tags
          ? Array.isArray(event.tags)
            ? event.tags.some((tag) => tag.toLowerCase().includes(search))
            : event.tags.toLowerCase().includes(search)
          : false
        const matchesEventType =
          !currentEvent || event.eventType === currentEvent
        return matchesEventType && (inTitle || inTags)
      })
    : []

  return (
    <main className="bg-body-secondary min-vh-100 py-4">
      <div className="container-fluid">
        <div className="container">
        
        <Header onSearch={setSearchTerm} />

       
        <div className="d-flex flex-row flex-md-row justify-content-between align-items-center gap-3 mb-4 mt-3">
          <p
            className="fs-3 fw-semibold text-dark mb-0 text-nowrap"
            style={{ whiteSpace: "nowrap" }} 
          >
            Meetup Events
          </p>

          
          <div className="ms-auto w-100 w-md-auto">
            <EventType
              currentEvent={currentEvent}
              setCurrentEvent={setCurrentEvent}
            />
          </div>
        </div>

       
        {loading && <p>Loading...</p>}
        {error && <p>An error occurred while fetching the meetings.</p>}

        
        <div className="row gy-4">
          {filteredEvents && filteredEvents.length > 0 ? (
            filteredEvents.map((m) => (
              <div className="col-12 col-sm-6 col-lg-4" key={m._id}>
                <div className="card border-0 shadow-sm h-100 p-2 rounded-3">
                  <div className="text-muted small px-2 pt-2">
                    {m.eventType}
                  </div>

                  <Link
                    to={
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
                    }
                  >
                    <img
                      src={m.image}
                      alt={m.title}
                      className="img-fluid rounded mb-2"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </Link>

                  <div className="card-body pt-2">
                    <div className="text-secondary small mb-1">{m.date} IST</div>
                    <strong className="h6">{m.title}</strong>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">No events found.</p>
          )}
        </div>
        </div>
      </div>
    </main>
  )
}

export default App
