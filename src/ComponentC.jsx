import ComponentD from "./ComponentD"
import react , {useContext} from 'react'
import { UserContext } from './ComponentA'
function ComponentC (props) {
    const user = useContext(UserContext)
    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD user={user}/>
        </div>
         )
}
export default ComponentC