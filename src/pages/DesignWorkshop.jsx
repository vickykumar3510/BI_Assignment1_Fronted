import Header from "../components/Header";
import useFetch from "../../useFetch";

const DesignWorkshop = () => {
  const { data, loading, error } = useFetch(
    "https://bi-assignment1-backend-gamma.vercel.app/dashboard/title/Design Workshop"
  );
  //console.log(data);

  return (
    <main className="bg-body-secondary min-vh-100 py-4">
      <div className="container-fluid px-3">
      <div className="container">
      <Header />

      {loading && <p>Loading...</p>}
      {error && <p>An error occurred while fetching the event.</p>}

      <div className="row">
        {data && data.length > 0 ? (
          data.map((d) => (
            <div key={d._id} className="row mb-5">
              <div className="col-12 col-lg-8 mb-4 mb-lg-0">
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
                    height: "auto",
                    maxHeight: "250px",
                    objectFit: "cover",
                    marginBottom: "1rem",
                  }}
                />

                <h2>Details:</h2>
                <p style={{ textAlign: "justify" }}>
                  Advance your digital expertise by joining the Comprehensive Digital Marketing Workshop, created for ambitious professionals seeking real growth. This event takes place on September 10th from 2:00 PM to 4:30 PM at Innovate Hub, 456 Marketing Street, Downtown. Participate in engaging sessions with Priya Sharma, Senior Content Strategist, and Amit Verma, Analytics Consultant, as they demonstrate innovative techniques in social campaigns and data-driven advertising with hands-on activities and real-world examples. The workshop also features a Q&A, networking opportunities, and digital resources for all who attend. Open to ages 18 and above, with tickets at ₹2,500. Dress code is smart casual for a relaxed but professional setting.
                </p>
                <h2>Additional Information:</h2>
                <p>
                  <strong>Dress Code:</strong> Smart Casual
                </p>
                <p>
                  <strong>Age Restrictions:</strong> 18 and above
                </p>
                <h3>Event Tags:</h3>
                <div className="d-flex flex-row gap-2 flex-wrap align-items-center">
                <button  className="btn btn-danger btn-sm" style={{ minWidth: "100px" }}>
                  Design
                </button>
                <button  className="btn btn-danger btn-sm" style={{ minWidth: "100px" }}>
                  Digital
                </button>
                </div>
              </div>
            
              <div className="col-12 col-lg-4">
                <div className="row">
                <div className="card p-3 mb-3 shadow-sm border-0">
                  <div>{d.date} to</div>Mon Jul 10 02023 at 2:00:00 PM
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
                  <div className="d-flex mt-2 flex-wrap justify-content-center gap-3">
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
                  <button className="btn btn-danger w-75 w-lg-75">RSVP</button>
                </div>
              </div>
            </div>
            </div>
          ))
        ) : (
          <p>No event found</p>
        )}
      </div>
      </div>
      </div>
    </main>
  );
};

export default DesignWorkshop;
