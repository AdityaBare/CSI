import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  const handelEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handelViewStudents = (id) => {
    navigate(`/viewStudents/${id}`);
  };

  useEffect(() => {
    const setData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/events");
        if (res.data.success) {
          setEvents(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    setData();
  }, []);

  const handelDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;
    try {
      const res = await axios.delete(`http://localhost:8080/events/${id}`);
      if (res.data.success) {
        setEvents((prev) => prev.filter((e) => e._id !== id));
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <div className="m-5 p-5">
      <div className="row">
        {events.map((event) => (
          <div className="col-lg-4 col-sm-6 mb-4" key={event._id}>
            <div className="card bg-light">
              <div className="card-body p-3">
                <h5>{event.name}</h5>

                <p><CalendarTodayIcon /> {new Date(event.date).toLocaleDateString()}</p>
                <p><AccessTimeIcon /> {event.time}</p>
                <p><ShareLocationIcon /> {event.location}</p>
                <p><EmojiEventsIcon /> {event.prize}</p>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => handelViewStudents(event._id)}
                  >
                    View Students
                  </button>

                  <IconButton
                    className="bg-danger text-light"
                    onClick={() => handelDelete(event._id)}
                  >
                    <DeleteIcon />
                  </IconButton>

                  <IconButton
                    className="bg-success text-light"
                    onClick={() => handelEdit(event._id)}
                  >
                    <EditIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
