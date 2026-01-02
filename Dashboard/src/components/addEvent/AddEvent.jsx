import axios from "axios";
import { useState } from "react";

function AddEvent() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const handelInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
     e.preventDefault();
    await axios
      .post("http://localhost:8080/events", formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });

    setFormData({
      name: "",
      date: "",
      time: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="container m-4">
      <div className="d-flex justify-content-center">
        <form className="w-50" onSubmit={handelSubmit}>
          <p className="fs-3 text-center">Add New Event</p>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Event Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter event title"
              name="name"
              value={formData.name}
              onChange={handelInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Enter event description"
              name="description"
              value={formData.description}
              onChange={handelInput}
            />
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
              placeholder="Enter Venue"
              name="location"
              value={formData.location}
              onChange={handelInput}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
