import { useEffect, useRef, useState } from "react"

const StopWatch = () => {
    const [launch, setLaunch] = useState(false)
    const [stopWatchTime, setStopWatch] = useState(0)
    const intervalId = useRef(0)
    const startTime = useRef(0)

    useEffect(() => {
        if (launch) {
            intervalId.current = setInterval(() => {
                setStopWatch(Date.now() - startTime.current)
            }, 10)
        } else {
            clearInterval(intervalId.current)
        }

        return () => {
            clearInterval(intervalId.current)
        }
    }, [launch])

    function start() {
        startTime.current = Date.now() - stopWatchTime
        setLaunch(true)
    }

    function stop() {
        setLaunch(false)
    }

    function reset() {
        setStopWatch(0)
        setLaunch(false)
    }

    function formatTime() {
        let hours = Math.floor(stopWatchTime / (1000 * 60 * 60))
        let minutes = Math.floor((stopWatchTime / (1000 * 60)) % 60)
        let seconds = Math.floor((stopWatchTime / 1000) % 60)
        let milliseconds = Math.floor((stopWatchTime % 1000) / 10)

        // Добавляем ведущие нули
        const addLeadingZeros = (unit) => String(unit).padStart(2, "0")

        return `${addLeadingZeros(hours)}:${addLeadingZeros(minutes)}:${addLeadingZeros(seconds)}:${addLeadingZeros(
            milliseconds
        )}`
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">
                    Start
                </button>
                <button onClick={stop} className="stop-button">
                    Stop
                </button>
                <button onClick={reset} className="reset-button">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default StopWatch
