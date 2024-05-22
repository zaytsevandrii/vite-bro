import { useState } from "react"
import ComponentB from "./ComponentB"
import { createContext } from "react"

export const userContext = createContext()
const ComponentA = () => {
    const [user, setUser] = useState("Andrii")
    return (
        <div className="box">
            <h1>ComponentA</h1>
            <h3>Hello {user}</h3>
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>
        </div>
    )
}

export default ComponentA
