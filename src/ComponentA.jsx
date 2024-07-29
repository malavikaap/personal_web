//create_context,share values among component without props,provider component
import react,{ useState , createContext} from "react" //import context
import ComponentB from "./ComponentB"
export const UserContext = createContext() // export context
function ComponentA () {
    const [user, setUser] = useState("Brocode")
    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}> 
            <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
         )
}
export default ComponentA