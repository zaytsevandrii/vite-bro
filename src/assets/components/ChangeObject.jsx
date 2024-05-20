import { useState } from "react"

const ChangeObject = () => {
    const [car, setCar] = useState({
        make: "Ford",
        model: "Fusion",
        year: 2017,
    })

    return (
        <div className="color-picker-container">
            <h1>
                My Car is: {car.year} {car.make} {car.model}
            </h1>
            <input type="number" value={car.year} onChange={(e) => setCar({ ...car, year: e.target.value })} />
            <input type="text" value={car.make} onChange={(e) => setCar({ ...car, make: e.target.value })} />
            <input type="text" value={car.model} onChange={(e) => setCar({ ...car, model: e.target.value })} />
        </div>
    )
}

export default ChangeObject
