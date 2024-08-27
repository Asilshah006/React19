import NetflixCard from "./Components/NetflixCard"
// import Profile from "./Components/Profile"
import './Components/Netflix.css'
import { Eventhandling } from "./Components/EventHandlng"
const App = ()=>{
  
  return(
    <section className="container">
      {/* <h1 className="card-heading">List of best Netflix Series</h1>
    <NetflixCard/> */}
    {/* <Profile/> */}
    <Eventhandling/>
    </section>
  )
}

export default App