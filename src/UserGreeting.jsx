import propTypes from 'prop-types';
function UserGreeting (props){
    // ****rendering using if-else
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else{
    //     return <h2>Please log in</h2>
    // }/

    //****using ternory condition
    //return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2> :<h2 className="login-prompt">Please log in</h2>)

    //using const
    
   const welcomemsg=<h2 className="welcome-msg">Thank You {props.username}</h2>
   const loginprompt=<h2 className="login-prompt">Sorry for inconvenience</h2>
   return(props.isSatisfied ? welcomemsg : loginprompt)
}
UserGreeting.propTypes={
    isSatisfied:propTypes.bool,
    username:propTypes.string,
}
// UserGreeting.defaultprops={
//     isSatisfied:false,
//     username:"Guest",
// }
export default UserGreeting