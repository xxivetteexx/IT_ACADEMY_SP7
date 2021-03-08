import React, {useState, useEffect} from "react"
import axios from "axios";

function TextList(){
    // useState hook
    const [list, setList] = useState([]);
    
    // useEffect hook
    useEffect(() => {
        axios
            .get('http://localhost:3000/dataText')
            .then(response => {
                // console.log(response.data)
                setList(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    {/* .map is an array */}
    const renderedList = list.map((name)=> {
            return <p key={name.id}>{name.text}</p>
    })
    

    return(
        <div className="list">
            {renderedList}
        </div>
    )
}
export default TextList





