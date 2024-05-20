import { useState } from "react"

const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF")

    const changeColor = (e) => {
        setColor(e.target.value)
    }
    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ background: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a Color:</label>
            <input type="color" value={color} onChange={changeColor} />
        </div>
    )
}

export default ColorPicker
