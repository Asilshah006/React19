import data from "../api/seriesData.json"






// export const Header = () =>{
//     return(
//         <h1>Netflix</h1>
//     )
// }




const NetflixCard = ()=>{
       
   return(
     <ul>
        {data.map((curElem) =>{
            return(
                <li key={curElem.id}>
                    <img src={curElem.img_url} alt={curElem.name} width= "40%" height= "40%"/>
                    <h2>{curElem.name}</h2>
                    <h3>{curElem.rating}</h3>
                    <p>{curElem.description}</p>
                    <p>{curElem.cast}</p>
                    <h3>{curElem.genre}</h3>
                    <a href={curElem.watch_url} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </li>
            )
        })}
        
    </ul>
    ) 
  }

// export const Footer =()=>{
//     return(
//         <p>&copy; copyright 2024</p>
//     )
// }

export default NetflixCard 