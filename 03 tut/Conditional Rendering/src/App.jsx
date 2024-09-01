import NetflixCard from "./Components/NetflixCard"
// import Profile from "./Components/Profile"
import './Components/Netflix.css'
import { Eventhandling } from "./Components/EventHandlng"
import { EventProps } from "./Components/EventProps"
import { UseState } from "./hooks/UseState"
import './hooks/hooks.css'
import { DerivedState } from "./hooks/DerivedState"
const App = ()=>{

  return(
    <section className="main">
      {/* <h1 className="card-heading">List of best Netflix Series</h1>
      <NetflixCard/> */}
      {/* <Profile/> */}
      {/* <Eventhandling/> */}
      {/* <EventProps/> */}
      {/* <UseState/>
      <SibilingIncreament/> */}
      <DerivedState/>
    </section>
  )
}
export const SibilingIncreament = () =>{
  console.log("Sibiling Increament");
  
  return(
      <h1>Sibiling Increament</h1>    
  )
}


export default App