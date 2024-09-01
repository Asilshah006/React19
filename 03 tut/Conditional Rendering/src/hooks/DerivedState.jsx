// const users = 

import { useState } from "react"

export const DerivedState = ()=>{
    
    const [users , setUsers] = useState([
        {name : "Asil" , age : 22},
        {name : "Mubashir" , age : 22},
        {name : "Sahil" , age : 22},
        {name : "Muteeb" , age : 22},
        {name : "Inayat" , age : 22}
    ])

    return(
        <section className="main">
        <ul>
            {users.map((user)=>(
                <li>
                    <h1> Name: {user.name} Age : {user.age} years old</h1>
                </li>
            )

            )}
        </ul>
        </section>
    )
}