import { useNavigate } from "react-router-dom"

const Header = ({ onSearch }) => {
  const navigate = useNavigate() 

  const handleInput = (e) => {
    onSearch(e.target.value)
  }

  const handleLogoClick = () => {
    navigate("/")  
  }

  return (
    <main className="bg-body-secondary">
      <div className="container-fluid">
        <div className="d-flex justify-content-center w-100">
        <p onClick={handleLogoClick} style={{ cursor: "pointer" }} className="text-danger fs-5 fw-bold mb-0"><i className="h1">meetup</i></p>
        <input
          type="text"
          placeholder="search by title and tags"
          className="form-control ms-auto"
          style={{ maxWidth: "280px", width: "100%", height: "40px"  }}
          onChange={handleInput}
        />
      </div>
      </div>
      <hr />
    </main>
  )
}

export default Header;
