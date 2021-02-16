import React, {useState, useEffect} from 'react';
import './App.css';
import { client } from './client'
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    client.getEntries()
    .then((response) => {
      console.log(response)
      setData(response.items);
    })
    .catch(console.error)
  }, []);

  useEffect(() => {
  fetch("https://thevirustracker.com/free-api?global=stats")
    .then(response => response.text())
    .then(result => setData(result))
    .catch(error => console.log('error', error));
  }, []);

  console.log("data", data)


  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>welcome to c19vac</h1>
        <div className="container">
          {data && data.map((item) => {
            return <p key={item.sys.id}>{item.fields.name}</p>
          })}
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
