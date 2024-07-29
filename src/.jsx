import React, {useState} from 'react'
function Food(){
    const post1="Sales Manager"
    const post2="Associate Engineer"
    const post3="Sales Executive"
    const post4="Data Analyst"
    const post5="Test Developer"
    const post6="Web Developer"
    return(
        <>
        <div className="food-class">
        <h2 className="job-class">Job Vaccancies</h2>
     <ul className='jobs'>
        <li>{post1.toUpperCase()}</li><br></br>
        <li>{post2.toUpperCase()}</li><br></br>
        <li>{post3.toUpperCase()}</li><br></br>
        <li>{post4.toUpperCase()}</li><br></br>
        <li>{post5.toUpperCase()}</li><br></br>
        <li>{post6.toUpperCase()}</li><br></br>
    </ul>  
    <h2 className="hiring">Hiring Combanies</h2>
    <p className='hire'>Are you looking for best jobs??? Register here for better future....</p>
    </div>
    </>
    )
}
export default Food