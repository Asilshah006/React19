import data from "../api/seriesData.json"
import { ListItems } from "./ListItems"


// export const Header = () =>{
//     return(
//         <h1>Netflix</h1>
//     )
// }



const NetflixCard = ()=>{
       
   return(
     <ul className="grid grid_three_cols">
        {data.map((curElem) => (
            <ListItems key={curElem.id} curElem = {curElem}/>
        ))}
        
    </ul>
    ) 
  }

// export const Footer =()=>{
//     return(
//         <p>&copy; copyright 2024</p>
//     )
// }

export default NetflixCard 