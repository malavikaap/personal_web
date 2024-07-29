import React,{useState} from "react";
import coverpage from './assets/edu.jpg'
import { useNavigate } from "react-router-dom";
function Education () {
  const navigate = useNavigate()
  const gotoToNewPage = () => {
    navigate("/graduation");
  }
    const gotoplustwo = () => {
      navigate("/plustwo")
    }
    const gotoTenth = () => {
      navigate("/gototenth")
    }
    return (
       <div className="edu">
        <img className='cover-img' src={coverpage} alt="profile picture" />
        <div className="education">
          <h2 className="edu-class">Educational Details</h2>
            <button className="edu-butn" onClick={gotoToNewPage}>Graduation</button>
            <button className="edu-butn" onClick={gotoplustwo}>Plus Two</button>
            <button className="edu-butn" onClick={gotoTenth}>SSLC</button>
        </div>
      </div>
    )
}
export default Education