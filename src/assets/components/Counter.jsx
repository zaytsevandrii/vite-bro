import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState("")
    const [options, setOptions] = useState("")

    const changeText = (event) => {
        setName(event.target.value)
    }

    return (
        <div className="container">
            <input type="text" value={name} onChange={changeText}></input>
            <p style={{ fontSize: "40px" }}>{name}</p>
            <h1 className="number">{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>INCREMENT</button>
            <button onClick={() => setCounter(0)}>RESET</button>
            <button onClick={() => setCounter(counter - 1)}>DECREMENT</button>
            <hr />
            <select value={options} onChange={(e) => setOptions(e.target.value)}>
                <option value="">Select option</option>
                <option value="Visa">Visa</option>
                <option value="World">World</option>
                <option value="Master">Master</option>
            </select>
            <p style={{ fontSize: "40px" }}>{options}</p>
        </div>
    )
}

export default Counter
