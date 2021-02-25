import React, {Component} from "react"
import data from "./db/db.json"
// import Linia from "./components/Linia"

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            textTheatre: []
        }
        // this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch("http://localhost:3000/")
            .then(response => response.json())
            .then(data => { console.log(data)
                this.setState({
                    loading: false,
                    textTheatre: data
                })
            })
    }
    
    render() {
        const text = this.state.loading ? "Loading..." : this.state.textTheatre.text
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">The Theatre App</h1>
                    <h4 className="App-subtitle">Click on the buttons below to see different theatrical texts.</h4>
                    <div className="buttons">
                        <button className="btn">Previous</button>
                        <button className="btn">After</button>
                    </div>
                    <img src="/img/Vector.png" className="App-logo" alt="logo" />
                    <p className="paragraph">{text}</p>
                </header>
            </div>
        )
    }
}

export default App

