function Buttons () {
    //const handleClick = () => console.log("WELCOME");
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`)print bro click me,just call handleclick in onclick() with $name as bro
    
    
    //if count<3 print it else stop,call same as above
    // let count=0
    // const handleClick = (name) => {
    //     if(count<3){
    //         count++
    //         console.log(`${name} you clicked me ${count} time/s `)
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`);
    //     }
    // }
    

    //display text event superb when button clicks,ondoubleclick
    const handleClick = (e) => e.target.textContent = "Superb"
    return (
        <>
            <button className="butn" type="submit" onDoubleClick={(e) => handleClick(e)}>Register</button>
            <h2 className="feedback">Feedback</h2>
        </>
    );
}

export default Buttons;
