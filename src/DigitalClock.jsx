import react, {useState , useEffect} from "react"
import profilePic from './assets/nature.jpg'
function Clock() {
    const [time, SetTime] = useState(new Date())
    useEffect(()=> {
        const intervalId = setInterval(() => {
            SetTime(new Date())
        }, 1000);

        return() => {
            clearInterval(intervalId)
        }
    },[])

    function  FormatTime() {
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" :"AM"
        hours = hours % 12 || 12
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridiem)}`
    }
    function padZero (number){
        return ( number < 10 ? "0" : "" ) + number
    }
    return(
        <div className="main">
            <div>
                <h2 className="clockclass">DIGITAL CLOCK</h2>
                <h2 className="timeclass">{FormatTime()}</h2>
                <img className='nature-img' src={profilePic} alt="profile picture"></img>
             </div>
        </div>
    )
}
export default Clock