import {useEffect, useState} from 'react';
import './App.css';

/**
 * Create-react app CORS - Proxy
 * se cambian los endpoint como dice la documentacion, al igual que en fetch.
 */

const URL = '/api';
function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  const getData = () =>{
    fetch(URL)
    .then( (response) => response.json())
    .then( (info) => setData(info))
  }

  useEffect( ()=>{
    getData();
  },[])

  const handleInfo = (event) => {
    setText(event.target.value) 
  }

  const handleClick = async () => { 
    await fetch('/api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"text": text})
    })
    getData();
    setText('');
  }
  
  return (
    <div className="App">
      <p>Introduce el texto</p>
      <input className="input" style={{padding: "10px"}} tpye="text" placeholder="value" onChange={handleInfo} value={text} ></input>
      <button className="button" onClick={handleClick} style={{marginLeft: "20px" , padding: "10px"}}>ENVIAR</button>
      <div className="dataBase">
          {data.map((value,index)=>{
            return(
              <p key={index}>{value}</p>
            )
          })}
      </div>
    </div>
  );
}

export default App;
