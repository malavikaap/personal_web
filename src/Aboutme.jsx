import react ,{useState} from 'react'
import profilePic from './assets/profile.jpg'
function Aboutme () {
    return (
        <>
       <div className='about'>
         <h2 className='about-me'>About Me</h2>
            <p>My name is Malavika.<br></br>Iam a Frond End Developer.<br></br>My native place is Calicut.Iam a Diploma Graduate.<br></br>And now iam persuing my B.tect in Information Technology.I know the languages like C,HTML,CSS,JS,NextJS,React,Python programming and so on.<br></br>Iam interested in team collaboration and working.My hobby is to study about new languages.</p><br></br>
            <img className="profiles" src={profilePic} alt="profile picture"></img>
            <div className='location'>
                <p>
                <i className="fas fa-map-marker-alt"></i>
                  Location: Calicut,Kerala 
                 <br></br><br></br>
                <i className="fas fa-phone"></i>
                    ph:7211344442 <br></br><br></br>
                 <i className="fa fa-envelope"></i>
                    htplaapp@gmail.com
                </p>
            </div>
       </div>
       </>
    )
}
export default Aboutme