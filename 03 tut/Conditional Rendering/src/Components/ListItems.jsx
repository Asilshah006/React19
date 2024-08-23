export const ListItems = ({curElem})=>{

    // eslint-disable-next-line react/prop-types
    const {key,img_url,name,rating,description,cast,genre,watch_url} = curElem;

    const btn_style = 
        {
            padding:'1.2rem 2.4rem',
            border:'none',
            fontSize:'1.6rem',
            backgroundColor:'blueviolet',
            color:'white'
        }
    

    return(
        <li key={key} className="card">
            <img src={img_url} alt={name} width= "40%" height= "40%"/>
            <div className="card-content">
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Description: {description}</p>
            <p>Cast: {cast.join(", ")}</p>
            <p>Genre: {genre.join(", ")}</p>
            <a href={watch_url} target="_blank">
                <button style={btn_style}>Watch Now</button>
            </a>
            </div>
        </li>
    )
}