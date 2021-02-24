import React, {Component} from "react"
import data from "./db/db.json"
// import Linia from "./components/Linia"
import StyledComponents from "./components/StyledComponents"

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
            <div>
                <StyledComponents/>
                {/* <button>Previous</button>
                <button>After</button> */}
                <p>{text}</p>
            </div>
        )
    }
}

export default App


// function App (){
//     // const LiniaComponents = data.map(data =>
//     //     <Linia key={data.id} text={data.text} />) 
    
//     const [data,setData]=useState([]);
    
//     const getData=()=>{
//         fetch('/data/data.json')
//             .then(response => response.json())
//             .then(data => console.log(data))
//     }

//     useEffect(()=>{ getData()},[])
    
//     return (
//         <div> 
//             <StyledComponents/>
//             <button>Previous</button>
//             <button>After</button>
//             {/* {data && data.length>0 && data.map((item)=><p>{item.about}</p>)} */}
//             {/* {LiniaComponents}       */}
//         </div>
//     )
// }
