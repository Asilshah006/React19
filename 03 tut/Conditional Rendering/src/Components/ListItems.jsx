import styled from "styled-components";

export const ListItems = ({curElem})=>{

    // eslint-disable-next-line react/prop-types
    const {key,img_url,name,rating,description,cast,genre,watch_url} = curElem;

    // const btn_style = 
    //     {
    //         padding:'1.2rem 2.4rem',
    //         border:'none',
    //         fontSize:'1.6rem',
    //         backgroundColor: `${rating>=8.5 ? "#7cdeaf" : "rgba(248, 248, 50, 0.973)"}`,
    //         color:'#000',
    //         fontWeight: 'bold'
    //     }
    
    const Btn_watch = styled.button`  
        padding: 1.2rem 2.4rem;
        border: none;
        font-size: 1.6rem;
        background-color: ${(props)=> props.rating >= 8.5 ? "#7cdeaf" : "#f7dc6f"};
        color: #000;
        font-weight: bold;
    `

  
    return(
        <li key={key} className="card">
            <img src={img_url} alt={name} width= "40%" height= "40%"/>
            <div className="card-content">
            <h2>Name: {name}</h2>
            <h2>Rating: <span className={`rating ${rating>= 8.5 ? "super-hit" : "average" }`}>{rating}</span></h2>
            <p>Description: {description}</p>
            <p>Cast: {cast.join(", ")}</p>
            <p>Genre: {genre.join(", ")}</p>
            <a href={watch_url} target="_blank">
                <Btn_watch rating={rating}>Watch Now</Btn_watch>
            </a>
            </div>
        </li>
    )
}