import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import { useEffect, useState } from "react";

import axios from "axios"
import Alert from "@mui/material/Alert";
function EventCount() {

  const [count , setCount] = useState({
       totalEvent:0,
      totalRegistration:0,
      upcomingEvents:0,
      completed:0

  })

    useEffect(() => {
    const counter = async () => {
      try {
        const res = await axios.get("http://localhost:8080/admin");

        if (res.data.success) {
          setCount(res.data.data);
        } else {
          Alert(res.data);
        }
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    counter();
  }, []);
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row h-10">
          <div className="col-lg-3 col-md-3 mt-1 ">
            <div className="border bg-light border-4 rounded d-flex justify-content-around p-4">
              <p>
                Total Events <br />
                {count.totalEvent}
              </p>

              <CalendarTodayIcon sx={{ color: "#3f51b5" }} />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 mt-1">
            <div className="border bg-light border-4 rounded d-flex justify-content-around p-4">
              <p>
                Upcoming Events <br />
                {count.upcomingEvents}
              </p>

              <CalendarTodayIcon sx={{ color: "#278113ff" }} />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 mt-1">
            <div className="border bg-light border-4 rounded d-flex justify-content-around p-4">
              <p>
                Completed Events <br />
                {count.completed}
              </p>

              <CalendarTodayIcon sx={{ color: "#e51d1dff" }} />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 mt-1">
            <div className="border bg-light border-4 rounded d-flex justify-content-around p-4">
              <p>
                Total Registrations <br />
                {count.totalRegistration}
              </p>

              <AlignVerticalBottomIcon sx={{ color: "#ca399aff" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCount;
