import React, {useState, useEffect} from "react"
import axios from "axios";

function App () {
    const [list, setList] = useState([]); 
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");

    //Fetching local data (API) 
    useEffect(() => {
        const fetchData = async() => { 
            const result = await axios.get('http://localhost:3000/dataText');
            setList(result.data) 
        };
        fetchData();  
    }, []);
  
    // HANDLE PREVIOUS 
    const handlePrev = ()=> {
        if(index <= 0) {    

        }else {
            setIndex(index - 1);
            setCurrentText(list[index].text)
        }
    };

    // HANDLE NEXT 
    const handleNext= () => {
        if(index >= list.length){ 
           
        }else {
            setIndex(index + 1);
            setCurrentText(list[index].text)
        }
    };  


    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">The Theatre App</h1>
                <h4 className="App-subtitle">Click on the buttons below to see different theatrical texts.</h4>
                <div className="buttons">
                    <button className="btn" onClick={handlePrev}>Previous Line</button>
                    <button className="btn" onClick={handleNext}>Next Line  </button>
                </div>         
            </header>  

            <div className="App-section1">
                {currentText}
            </div> 
            
            <div className="App-section2">
                <img className="App-img" src="/img/forms.png"  alt="logo" />  
            </div>        
        </div>
    )
}

export default App


