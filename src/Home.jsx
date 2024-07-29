import React,{useState} from "react";
import profilePic from './assets/profile.jpg'
import coverpage from './assets/hii.jpg'
function Home() {
    return (
        <div className="main-class">
            <img className='cover-img' src={coverpage} alt="profile picture" />
                <div className="right">
                 <h1 className="heading">Hello,Iam Malavika Ap</h1>
                 <p className="content">A Front End Developer....</p>
                 <img className="profiledemo" src={profilePic} alt="profile picture"></img>
                </div>
        </div>
    )
}
export default Home