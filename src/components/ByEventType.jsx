import React from "react"

const EventType = ({ currentEvent, setCurrentEvent }) => {
  const eventSelectHandler = (e) => {
    setCurrentEvent(e.target.value)
  }

  return (
    <div>
      <select onChange={eventSelectHandler} value={currentEvent} className="form-control">
        <option value="">Select Event Type</option>
        <option value="Offline Event">Offline Event</option>
        <option value="Online Event">Online Event</option>
        <option value="Both">Both</option>
      </select>
    </div>
  )
}

export default EventType
