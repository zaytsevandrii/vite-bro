import { useContext } from "react"
import { userContext } from "./ComponentA"

const ComponentD = () => {
    const user = useContext(userContext)
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <h3>Buy {user}</h3>
        </div>
    )
}

export default ComponentD
