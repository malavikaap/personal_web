import react, {useState , useEffect, useRef} from 'react'
function StopWatch() {
    const [isRunning, SetisRunning] = useState(false)
    const [elaspsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)
    useEffect(()=> {
        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            },10)
        }
        return () => {
            clearInterval(intervalIdRef.current)
        }
    },[isRunning])

    function Start () {
        SetisRunning(true)
        startTimeRef.current = Date.now() - elaspsedTime
    }
    function Stop () {
        SetisRunning(false)
      }
    function reset () {
        setElapsedTime(0)
        SetisRunning(false)
      }
    function formatTime() {
        let hours = Math.floor(elaspsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elaspsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elaspsedTime / (1000 % 60))
        let milliseconds = Math.floor((elaspsedTime % 1000) / 10)
        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")
        return `${minutes}:${seconds}:${milliseconds}`
        
    }
    return(
        <div className="main">
            <div className="subclass">
                <h2 className="counter-display">STOP WATCH</h2>
                <h2 className="counter-dis">{formatTime()}</h2>
                <button className="start-buttton" onClick={Start}>Start</button>
                <button className="stop-buttton" onClick={Stop}>Stop</button>
                <button className="reset-buttton" onClick={reset}>Reset</button>
                </div>
        </div>
    )
}
export default StopWatch