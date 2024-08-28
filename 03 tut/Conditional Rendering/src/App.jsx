import NetflixCard from "./Components/NetflixCard"
// import Profile from "./Components/Profile"
import './Components/Netflix.css'
import { Eventhandling } from "./Components/EventHandlng"
import { EventProps } from "./Components/EventProps"
const App = ()=>{
  
  return(
    <section className="container">
      {/* <h1 className="card-heading">List of best Netflix Series</h1>
      <NetflixCard/> */}
      {/* <Profile/> */}
      {/* <Eventhandling/> */}
        <EventProps/>
    </section>
  )
}

export default App