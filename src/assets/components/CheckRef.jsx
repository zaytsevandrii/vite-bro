import { useEffect, useRef } from "react"
import { useState } from "react"

const CheckRef = () => {
    const click = useRef(0)

    useEffect(() => {
        console.log("RENDER")
    })
    const handleClick = () => {
        click.current = click.current + 1
        console.log(click.current)
    }
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default CheckRef
