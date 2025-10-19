import Header from "../components/Header";
import useFetch from "../../useFetch";

const Conference3 = () => {
  const { data, loading, error } = useFetch(
    "https://bi-assignment1-backend-gamma.vercel.app/dashboard/title/Conference 3"
  );
  //console.log(data);

  return (
    <main className="bg-body-secondary">
      <div className="container">
      <Header />

      {loading && <p>Loading...</p>}
      {error && <p>An error occurred while fetching the event.</p>}

      <div className="row">
        {data && data.length > 0 ? (
          data.map((d) => (
            <div key={d._id} className="row mb-4">
              <div className="col-8">
                <p className="h1">{d.title}</p>
                <p>
                  Hosted By: <br/>
                  <strong>Marketing Experts</strong>
                </p>
                <img
                className="img-fluid rounded"
                  src={d.image}
                  alt={d.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                  }}
                />

                <h2>Details:</h2>
                <p>
                  Stay ahead in creative marketing by attending the Creative Campaign Seminar by Promotion Gurus, a hub for forward-thinking marketers. Attend on August 28th from 4:00 PM to 6:30 PM at Idea Hall, 222 Promotion Lane, City Center, and be part of an experience where creativity meets strategy. Expect to hear from Meera Desai, Campaign Manager, and Vikram Joshi, Email Expert, as they unveil cutting-edge campaign designs, audience targeting secrets, and automation tools. Activities include live brainstorming, templates to take home, and a networking mixer at the end. For guests 18+, the ticket price is ₹2,800, with a smart casual dress code to maintain a welcoming atmosphere.
                </p>
                <h2>Additional Information:</h2>
                <p>
                  <strong>Dress Code:</strong> Smart Casual
                </p>
                <p>
                  <strong>Age Restrictions:</strong> 18 and above
                </p>
                <h3>Event Tags:</h3>
                <button  className="btn btn-danger me-4">
                  Marketing
                </button>
                <button  className="btn btn-danger">
                  Production
                </button>
              </div>
            
              <div className="col-4">
                <div className="card p-3 mb-3">
                  <div>{d.date} to</div>Thu Oct 12 02023 at 7:00:00 PM IST
                  <div className="mt-3">
                    Marketing City
                    <br />
                    789 Marketing Avenue, City
                  </div>
                  <div className="mt-3">
                    <strong>₹</strong> 3,000
                  </div>
                </div>

                <div className="card p-3">
                  <h5>Speakers (2)</h5>
                  <div className="d-flex mt-2">
                    <div className="me-3 text-center">
                      <img
                        src="https://media.istockphoto.com/id/1387644817/photo/outdoor-image-of-gorgeous-positive-lady-with-charming-smile-and-loose-gray-hair-enjoying-nice.jpg?s=612x612&w=0&k=20&c=0GKocLBV61waG0dakvfkhX_TgOYahbqrnGO1xa7jULY="
                        alt="Sarah Johnson"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>Sarah Johnson</div>
                      <small>Marketing Manager</small>
                    </div>
                    <div className="text-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s"
                        alt="Michael Brown"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                      <div>Michael Brown</div>
                      <small>SEO Specialist</small>
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <button className="btn btn-danger w-50">RSVP</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No event found</p>
        )}
      </div>
      </div>
    </main>
  );
};

export default Conference3;
