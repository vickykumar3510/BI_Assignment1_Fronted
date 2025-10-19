const Header = ({ onSearch }) => {
  const handleInput = (e) => {
    onSearch(e.target.value)
  }

  return (
    <main className="bg-body-secondary">
      <div className="d-flex align-items-center">
        <p className="text-danger fs-5 fw-bold mt-4"><i className="h1">meetup</i></p>

        <input
          type="text"
          placeholder="search by title and tags"
          className="form-control ms-auto"
          style={{ width: "250px", height: "38px" }}
          onChange={handleInput}
        />
      </div>
      <hr />
    </main>
  )
}

export default Header;
