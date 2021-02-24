import React from "react"
import data from "./data/data.json"
import Linia from "./components/Linia"
import StyledComponents from "./components/StyledComponents"

function App() {
    const LiniaComponents = data.map(data =>
    <Linia key={data.id} text={data.text} />) 

    return (
        <div>   
            <StyledComponents/>
            {LiniaComponents}      
        </div>
    )
}

export default App