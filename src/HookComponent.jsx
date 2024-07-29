//using hook,set name to keerthy by clicking setname
import React , {useState} from 'react'
function HookComponent (){
    const [name,setName] = useState()//can provide value inside usestate,then it will show default name
    const [age,setAge] = useState(0)
    const [isEmployed,setIsEmployed] = useState(false)
    //update name
    const updateName = () => {
        setName("Keerthy")
    }
    //update age
    const IncrementAge = () => {
        setAge(age + 1)
    }

    //toggle employee status
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }
    return(
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age:{age}</p>
            <button onClick={IncrementAge}>Increment Age</button>

            <p>isEmployed:{isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedStatus}>toggle status</button>
        </div>
    )
}
export default HookComponent