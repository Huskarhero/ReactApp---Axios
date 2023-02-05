import React from "react"
import logo from './logo.svg';
import './App.css';
import Contacts from "./Contact";
import axios from "axios";

function App() {
  const [data, setData] = React.useState(null);
  const [firstName, setFirstName] = React.useState(null);
  const [lastname, setLastname] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        // setData(data.message)
        console.log(res);
        setData(res.contacts);
      });
  }, []);

  const onFirstNameChanged = (e) => {
    console.log(e.target.value)
    setFirstName(e.target.value);
  }

  const onLastNameChanged = (e) => {
    console.log(e.target.value)
    setLastname(e.target.value);
  }
  
  const add = async () => {

    // // Post new data to backend
    // fetch("http://localhost:3001/api", {
    //   method: "POST",
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ firstname: firstName, lastname: "", number: ""})
    // }).then(res=>res.json()).then(res=>{
    //     // this will reponse with the new array
    //     console.log(res);
    //     setData(res.contacts);
    // })

    let res = await axios.post("http://localhost:3001/api", {
      firstname: firstName,
      lastname: "",
      number: "",
      lastname: ""
    })
    console.log(res.data.contacts)
    setData(res.data.contacts);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <input type="text" value={firstName} onChange={onFirstNameChanged}/>
          <input type="text" value={lastname} onChange={onLastNameChanged}/>
          <button onClick={add}>Add</button>
        </div>
        <Contacts data={data} />
      </header>
    </div>
  );
}

export default App;
