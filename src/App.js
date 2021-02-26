import React, {useState , useEffect} from "react"
import axios from "axios";



function App () {
    const [text, setText] = useState([]);
    // const text = this.state.loading ? "Loading..." : this.state.textTheatre.text
    
    useEffect(() => {
        axios.get('http://localhost:3000/dataText')
            .then(response => {
                console.log(response.data)
                setList(response.data.text);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
   
    
  
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">The Theatre App</h1>
                    <h4 className="App-subtitle">Click on the buttons below to see different theatrical texts.</h4>
                    <div className="buttons">
                        <button className="btn">Previous</button>
                        <button className="btn">After</button>
                    </div>
                    {/* <p className="paragraph">Loading...</p> */}
                    <p className="paragraph">{text}</p>
                    <img className="App-img" src="/img/forms.png"  alt="logo" />  
                </header>         
            </div>
        )
}

export default App

