import react ,{useState} from 'react'
import profilePic from './assets/graduation.jpg'
function Graduation () {
    return (
       <div className='gradu'>
            <img className='card-image' src={profilePic} alt="profile picture" />
            <div className='right'>
                <h2 className='graduation'>Graduation Details</h2>
                    <ul>
                        <li><b>First class in B.Tech Information Technology</b></li>
                        <li>From Calicut University Institute of Engineering And Technology</li>
                        <li>Located in Kohinoor,Malappuram Dist.</li><br></br>
                        <li><b>First class with Distinction in Diploma in Computer Engineering</b></li>
                        <li>From AKNM Gov.PolyTechnic College,Thirurangadi</li>
                        <li>Located in Chelari,Malappuram Dist.</li>
                    </ul>
            </div>
       </div>
    )
}
export default Graduation