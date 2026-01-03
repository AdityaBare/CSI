import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";


function Events() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const setData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/events");

        if (res.data.success) {
          setEvent(res.data.data);
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    setData();
  }, []);

  return (
    <div className="m-5 p-5">
      <div className="row">
        {event.map((event) => (
          <div className="col-lg-4 col-sm-6 mb-4" key={event._id}>
            <div className="card bg-light">
              <div className="card-body p-3">

                <div className=" mt-3 row">
                  <h5 className="card-title d-inline col-lg-8">{event.name}</h5>
                  <p className=" col-lg-4 mt-sm-3 ">
                  <span className="border border-success rounded-pill border-3 text-success p-2"> {event.status}</span> 
                  </p>
                </div>

                <p className="text-muted">{event.description}</p>

                <p className="text-muted">
                  <CalendarTodayIcon />{" "}
                  {new Date(event.date).toLocaleDateString()}
                </p>

                <p className="text-muted">
                  <AccessTimeIcon /> {event.time}
                </p>

                <p className="text-muted">
                  <ShareLocationIcon /> {event.location}
                </p>

                <p className="text-muted">
                  <EmojiEventsIcon /> {event.prize}
                </p>

                <div className="d-flex align-items-center gap-3">
                  <a href="#" className="btn btn-primary">
                    View Students
                  </a>

                  <IconButton
                    size="small"
                    className="bg-danger text-light"
                  >
                    <DeleteIcon />
                  </IconButton>

                  <IconButton
                    size="small"
                    className="bg-success text-light"
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
