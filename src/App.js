import React from "react"
import data from "./data/data.json"
import Linia from "./components/Linia"

function App() {
    const LiniaComponents = data.map(data =>
    <Linia key={data.id} text={data.text} />) 

    return (
        <div>
            {LiniaComponents}
        </div>
    )
}

export default App