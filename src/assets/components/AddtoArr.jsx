import { useState } from "react"

const AddtoArr = () => {
    const [foods, setFood] = useState(["Apple", "Orange", "Kiwi"])
    const addFood = () => {
        const newElement = document.getElementById("newArr").value
        console.log(newElement)
        setFood([...foods, newElement])
    }

    const deleteF = (index) => {
        setFood(foods.filter((f, id) => id !== index))
    }
    return (
        <div className="color-picker-container">
            <h1>My list of food</h1>
            <ul>
                {foods.map((el, i) => (
                    <li style={{ margin: "10px" }} key={i} onClick={() => deleteF(i)}>
                        {el}
                    </li>
                ))}
            </ul>
            <input type="text" id="newArr" />
            <button onClick={addFood} style={{ padding: "5px 20px", marginTop: "10px", fontSize: "20px" }}>
                AddFood
            </button>
        </div>
    )
}

export default AddtoArr
