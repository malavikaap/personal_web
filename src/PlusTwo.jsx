import react ,{useState} from 'react'
import profilePic from './assets/plusto.jpg'
function plustwo () {
    return (
       <div className='tenth'>
            <img className='tenth-image' src={profilePic} alt="profile picture" />
            <div className='right-tenth'>
                <h2 className='graduation'>Higher Secondary Details</h2>
                    <ul>
                        <li>Pass out with <b>3 A+ , 3 A</b></li>
                        <li>Public Board of Examination,Kerala</li>
                        <li>From MHSS Moonniyur</li>
                        <li>Located in Mooniyur,Malappuram Dist.</li>
                    </ul>
            </div>
       </div>
    )
}
export default plustwo