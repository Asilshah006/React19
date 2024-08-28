export const EventProps = ()=>{
   
    const handleUserWelcome =(user)=>{
        alert(`Hi, ${user} Welcome `)
    }

    const handleHover =()=>{
        alert('You are hovering')
    }
    return(
        <WelcomeEvent 
            onClick={()=>handleUserWelcome("asil")}
             onMouseEnter = {handleHover()}
        />
    )
}

const WelcomeEvent =(props)=>{
    
   const handleWelcome =()=>{
    console.log("Hi User Welcome");
    props.onClick()
    
   }
    return(
    <>
         <button onClick={props.onClick}>btn1</button>
        <button onMouseEnter={props.onMouseEnter}>btn2</button>
        <button onClick={handleWelcome}>btn3</button>
    </>
    )
}