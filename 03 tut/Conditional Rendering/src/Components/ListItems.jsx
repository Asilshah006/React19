export const ListItems = (props)=>{

    const {key,img_url,name,rating,description,cast,genre,watch_url} = props.curElem;
    return(
        <li key={props.key}>
            <img src={props.curElem.img_url} alt={props.curElem.name} width= "40%" height= "40%"/>
            <h2>{props.curElem.name}</h2>
            <h3>{props.curElem.rating}</h3>
            <p>{props.curElem.description}</p>
            <p>{props.curElem.cast}</p>
            <h3>{props.curElem.genre}</h3>
            <a href={props.curElem.watch_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    )
}