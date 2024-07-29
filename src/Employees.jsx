import propTypes from 'prop-types'
function Employees(props)
{
    return(
        <div className="employees">
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Employee:{props.isEmployee ? "yes" :"no"}</p><br></br>
        </div>
    )
}
Employees.propTypes={
    name:propTypes.string,
    age:propTypes.number,
    isSatisfied:propTypes.bool,
}
export default Employees