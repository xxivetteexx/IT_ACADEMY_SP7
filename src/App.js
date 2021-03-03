import React from "react"
import TextListData from "./components/TextList";

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
            </header>  
            <div className="App-section1">
                <TextListData />
            </div> 
            <div className="App-section2">
                <img className="App-img" src="/img/forms.png"  alt="logo" />  
            </div>        
        </div>
    )
}

export default App

