import { useState } from "react"


export const UseState = ()=>{
    const [count , setCount] = useState(0);

    const handleCount =()=>{
        setCount(()=> count+1)
    }
    return(
        <section className="main">
        <button onClick={handleCount}>Increament</button>
        <h1>{count}</h1>
        <ChildIncreament count={count}/>
        </section>
    )


}

const ChildIncreament = ({count})=>{
    console.log("Child Increament");
    
    return(
        <>
        <h1>Child Increament - {count}</h1>    
        </>
    )
}