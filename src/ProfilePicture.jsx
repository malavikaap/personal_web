//display image in a page
import profilePic from './assets/axel.jpg'
function ProfilePicture () {
    const handleClcik = (e) => e.target.style.display = "none" //image disapperas when clicks
    return(
        //display hello when click the image
        <img onClick = {(e) => handleClcik(e)} src={profilePic}></img>
    )
}
export default ProfilePicture