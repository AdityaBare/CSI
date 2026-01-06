import {  useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ViewStudents() {
  const [event, setEvent] = useState({
    name: "",
    date: "",
    status: "",
    participants: [],
  });

const { id } = useParams();


  useEffect(() => {
    const eventData = async () => {
      try {
       

        const res = await axios.get(`http://localhost:8080/events/${id}`);
        setEvent(res.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    eventData();
  }, []);

  return (
  <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8 mt-4 border rounded">
          <div className="p-3">
            <h2>Registered Students</h2>
            <h5 className="text-muted">{event.name}</h5>
            <hr />
          </div>

          {/* Students List */}
          <div className="px-3">
            {event.participants.map((student, index) => (
              <div
                key={student._id}
                className="d-flex align-items-center bg-light rounded p-3 mb-3"
              >
            
                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                  style={{ width: "40px", height: "40px" }}
                >
                  {index + 1}
                </div>

            
                <div>
                  <p className="mb-1 fw-bold">{student.name}</p>

                  <div className="text-muted small d-flex gap-3">
                    <span>
                      <i className="bi bi-envelope me-1"></i>
                      {student.email}
                    </span>

                    <span>
                      <i className="bi bi-calendar-event me-1"></i>
                      Registered:{" "}
                      {new Date(student.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 border-top row">
          
                <strong className="text-center mb-4" >
              Total Registrations: {event.participants.length} 
              {event.maxSeats}
            </strong>
            
            <div className="col-2"></div>
             <Link to="/" className="btn btn-success d-inline col-8">
            <button className="btn bg-success d-inline ">close</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

}

export default ViewStudents;
