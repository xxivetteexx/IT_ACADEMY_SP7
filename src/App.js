import React from "react"
import DataFetching from "./components/DataFetching";

function App () {

    // function increment() {
    //     setCount(prevCount => prevCount + 1)
    // }
    
    // function decrement() {
    //     setCount(prevCount => prevCount - 1)
    // }    

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">The Theatre App</h1>
                <h4 className="App-subtitle">Click on the buttons below to see different theatrical texts.</h4>
                <div className="buttons">
                    <button className="btn">Previous</button>
                    <button className="btn">After</button>
                     {/* <button onClick={decrement} className="btn">Previous</button> */}
                    {/* <button onClick={increment} className="btn">After</button> */}
                </div>
                <img className="App-img" src="/img/forms.png"  alt="logo" /> 
                <DataFetching />
            </header>         
        </div>
    )
}

export default App

