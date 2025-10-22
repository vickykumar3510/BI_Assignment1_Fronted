const Header = ({ onSearch }) => {
  const handleInput = (e) => {
    onSearch(e.target.value)
  }

  return (
    <main className="bg-body-secondary">
      <div className="container">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <p className="text-danger fs-5 fw-bold mb-0"><i className="h1">meetup</i></p>
        <input
          type="text"
          placeholder="search by title and tags"
          className="form-control ms-auto"
          style={{ maxWidth: "280px", width: "100%", height: "40px" }}
          onChange={handleInput}
        />
      </div>
      </div>
      <hr />
    </main>
  )
}

export default Header;
