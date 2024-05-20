import { useEffect } from "react"
import { useState } from "react"

const DigitalClock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const addZero = (number) => {
        return (number < 10 ? "0" : "") + number
    }

    const hours = time.getHours()
    const seconds = time.getSeconds()
    const minutes = time.getMinutes()
    return (
        <div className="clockßcontainer">
            <div className="clock">
                <span>
                    {addZero(hours)}:{addZero(minutes)}:{addZero(seconds)}
                </span>
            </div>
        </div>
    )
}

export default DigitalClock
