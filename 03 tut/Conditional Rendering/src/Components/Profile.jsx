const Profile = () =>{
    return(
        <>
        <ProfieCard 
            name = "Asil" 
            age = {22} 
            greeting = {
                <strong>Hi Asil! Nice to meet you</strong>
            }
            >
            <p>Hobbies : Football , tennis, gaming </p>
            <button>Contact</button>
        </ProfieCard>
        <ProfieCard 
            name = "Asil" 
            age = {22} 
            greeting = {
                <strong>Hi Asil! Nice to meet you</strong>
            }
            >
            <p>Hobbies : Football , tennis, gaming </p>
            <button>Contact</button>
        </ProfieCard>
        </>
    )

}

export default Profile

const ProfieCard = ({name, age, greeting,children})=>{
    return(
    <>
        <h3>Name : {name}</h3>
        <h3>Name : {age}</h3>
        <p>
            {greeting}
        </p>
        <div>
            {children}
        </div>
    </>
    )
}