
import {  useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
  import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
    const [event, setEvent] = useState({});
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
  


  const [formData, setFormData] = useState({
  name: "",
  date: "",
  time: "",
  location: "",
  description: "",
  prize: "",
  status: ""
});

useEffect(() => {
  if (event && event._id) {
    setFormData({
      name: event.name || "",
      date: event.date || "",
      time: event.time || "",
      location: event.location || "",
      description: event.description || "",
      prize: event.prize || "",
      status: event.status || ""
    });
  }
}, [event]);

  
   const handelInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const navigate = useNavigate();

   const handelSubmit = async (e) => {
     e.preventDefault();
    
      try {
     

        const res = await axios.put(`http://localhost:8080/events/${id}`
          , formData,
          {withCredentials:true}
        );
       
        if(res.data.success){
       return navigate("/");
        }

        
      } catch (error) {
        console.error("Error fetching events:", error);
      }


     
     

   }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 mt-4 border rounded">
            <div className="p-3">
              <h2>Edit Event</h2>

              <hr />
            </div>

            {/* Students List */}
            <div className="px-3">
              <form>
                <div class="mb-3">
                  <label for="eventTitle" class="form-label">
                    Event Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="eventTitle"
                    placeholder={event.name}
                  />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder={event.description}
                  ></textarea>
                </div>

                <div className="mb-3 row">
                  <div className="col-12 col-md-6">
                    <label htmlFor="Date" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="Date"
                      name="date"
                   
                      value={formData.date}
                      onChange={handelInput}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="Time" className="form-label">
                      Time
                    </label>
                    <input
                      type="time"
                      className="form-control"
                      id="Time"
                      name="time"
                      value={formData.time}
                      onChange={handelInput}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="Venue" className="form-label">
                    Venue
                  </label>
                  <input
                    className="form-control"
                    id="Venue"
                    placeholder={event.location}
                    name="location"
                      value={formData.location}
                      onChange={handelInput}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="Venue" className="form-label">
                    Prize
                  </label>
                  <input
                    className="form-control"
                    id="Venue"
                    placeholder={event.prize}
                    name="prize"
                      value={formData.prize}
                      onChange={handelInput}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="status"
                     onChange={handelInput}
                     name="status"
                  >
                    <option selected>{event.status}</option>
                    <option value="upcoming">Upcoming</option>
                    <option value="ongoing">Ongoing</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>

                  </select>
                </div>
              </form>
            </div>

            {/* Footer */}
            <div className="p-3 border-top row">
              <div className="col-2"></div>
              <Link to="/" className="btn btn-danger d-inline col-4">
              <button className="btn btn-danger d-inline " > Cancel</button>
              </Link>
              <div className="col-2"></div>
          
              <button className="btn btn-success d-inline col-4" onClick={handelSubmit}>Update</button>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
