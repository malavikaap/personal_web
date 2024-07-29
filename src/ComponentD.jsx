//use context,consumer component
import react , {useContext} from 'react'
import { UserContext } from './ComponentA'//also import created usercontext
function ComponentD () {
    const user = useContext(UserContext)//const
    return(
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
         )
}
export default ComponentD