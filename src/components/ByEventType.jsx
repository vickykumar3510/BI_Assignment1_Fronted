import React from "react"

const EventType = ({ currentEvent, setCurrentEvent }) => {
  const eventSelectHandler = (e) => {
    setCurrentEvent(e.target.value)
  }

  return (
    <div className='container-fluid'>
    
      <div className="mt-2 mt-md-0 d-flex justify-content-md-end justify-content-center">
      <select onChange={eventSelectHandler} value={currentEvent} className="form-control ms-auto" style={{ maxWidth: "280px", width: "100%", height: "40px"  }}>
        <option value="" >Select Event Type</option>
        <option value="Offline Event">Offline Event</option>
        <option value="Online Event">Online Event</option>
        <option value="Offline/Online Event">Both</option>
      </select>
    </div>
    </div>
    
  )
}

export default EventType
