export const Interview =()=>{
    var students = []
    
    return(
        <>
            {/* <p>{students.length && "No Students Available"}</p> */}
            <p>{students.length === 0 && "No Students Available"}</p>
            <p>No of Students : {students.length}</p>
        </>
    )
}