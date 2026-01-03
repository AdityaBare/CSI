import AddEvent from "../addEvent/AddEvent";

import EventCount from "./EventCount";
import Events from "./Events";
import Navbar from "./Navbar";

function Home() {
    return ( 
        <>
          <Navbar/>
          {/* <AddEvent/> */}
          <EventCount/>
          <Events/>
        </>
     );
}

export default Home;