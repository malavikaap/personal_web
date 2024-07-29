import react ,{useState} from 'react'
import profilePic from './assets/tenth.png'
function Tenth () {
    return (
       <div className='tenth'>
            <img className='tenth-image' src={profilePic} alt="profile picture" />
            <div className='right-tenth'>
                <h2 className='graduation'>SSLC Details</h2>
                    <ul>
                        <li>Pass out with <b>9 A+ , 1 A</b></li>
                        <li>Public Board of Examination,Kerala</li>
                        <li>From MHSS Moonniyur</li>
                        <li>Located in Mooniyur,Malappuram Dist.</li>
                        <li>Pass percentage:90%</li>
                        <li>Year:2016</li>
                    </ul>
            </div>
       </div>
    )
}
export default Tenth