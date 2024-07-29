import react, {useEffect, useRef, useState} from 'react'
function UseRef () {
    const inputRef = useRef(null)
    console.log(ref);
    useEffect(() => {
        console.log("component rendered");
    }

    )
    function HandleClick () {
       ref.current++;
       console.log(ref.current);
    }
    return(
        <div>
        <button onClick={HandleClick}>
            Click me
        </button>
        <input ref={inputRef}></input>
        </div>
    )
}
export default UseRef