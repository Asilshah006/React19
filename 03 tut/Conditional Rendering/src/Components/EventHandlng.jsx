export const Eventhandling =()=>{
    
    const handleClick = ()=>{
        alert("Hi i am on event listener")
        console.log(event);
        console.log(event.target); 
    }

    const handleUserClick =(user)=>{
        console.log(`hey ${user}, welcome `);
        
    }
    return(
       <>
         <button onClick={handleClick}>Click me</button>
         <button onClick={()=>handleClick(event)}>Click ME 1</button>
        <button onClick={handleUserClick}>Click User</button>
        <button onClick={()=>handleUserClick("Asil")}>Click User1</button>
       </>

        
    )
}