const App = () => {

  return (
    <>
      <NetflixCard/>
      <NetflixCard/>
      <NetflixCard/>
      <NetflixCard/>
      <NetflixCard/>
    </>
  )
}


const NetflixCard = ()=>{
  var name = "Animal"
  var rating = 9.2
  var summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa non temporibus maiores ex nihil iusto, officia distinctio soluta natus nulla placeat minus nemo. Nisi enim iste omnis qui! Consectetur."
  
  return(
    <div>
        <h2>{name}</h2>
        <h3>{rating}</h3>
        <p>{summary}</p>
      </div>
  )
}

export default App