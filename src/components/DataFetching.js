import React, {useState, useEffect} from "react"
import axios from "axios";

function DataFetching(){
    const [list, setList] = useState([]);
    
    useEffect(() => {
        axios
            .get('http://localhost:3000/dataText')
            .then(response => {
                console.log(response.data)
            })
            // .then((todo)=> {
            //     setList(todo.data)
            // })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return(
        <div>
            <ul> 
                {list.map((name) => <li key={name.key}>{name.text}</li>)}
            </ul>
        </div>
    )
}
export default DataFetching


