import { useState } from "react"
import "./App.css"
import Card from "./assets/components/Card"
import Counter from "./assets/components/Counter"
import ColorPicker from "./assets/components/ColorPicker"
import AddtoArr from "./assets/components/AddtoArr"
import DigitalClock from "./assets/components/DigitalClock"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <DigitalClock />
        </>
    )
}

export default App
