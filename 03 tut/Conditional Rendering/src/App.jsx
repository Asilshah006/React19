const App = ()=>{
  
  const NetflixCard = ()=>{
    
    var name = "Berlin"
    var rating = 8.2
    var summary = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, facilis iusto! Minima odio laudantium libero necessitatibus distinctio? Quo quia minus blanditiis repellat alias iure, vero dolor natus, ex dolore distinctio!"
    var age = 18
    const genre =()=>{
      return "Thriller"
    }
   return(
     <>
      <img src="berlin.jpg" alt="" />
      <h2>{name}</h2>
      <h3>{rating}</h3>
      <p>{summary}</p>
      <h3>{genre()}</h3>
      <button>{ age>=18 ?"Watch Now" : "Not Available"}</button>
    </>
    ) 
  }
  
  return(
    <>
    <NetflixCard/>
    <NetflixCard/>
    <NetflixCard/>
    <NetflixCard/>
    <NetflixCard/>
    </>
  )
}

export default App