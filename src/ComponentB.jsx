import react , {useContext} from 'react'
import { UserContext } from './ComponentA'
import ComponentC from "./ComponentC"
function ComponentB () {
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>Component B</h1>
            <h2>{`Hiii ${user}`}</h2>
            <ComponentC user ={user}/>
        </div>
         )
}
export default ComponentB