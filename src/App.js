import React, {useState, useEffect} from 'react';
import './App.css';
import { getContentfulData, getApiData } from './Api'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Details from './components/Details';
import Statistics from './components/Statistics';

function App() {
  const [data, setData] = useState();
  const [vaccineTypes, setVaccineTypes] = useState([]);
  const [states, setStates] = useState([]);


  useEffect(() => {
    // getData().then(result => setData(result));    SET ALL DATA
    getContentfulData("vaccineType").then(result => setVaccineTypes(result));
  }, []);


  useEffect(() => {
    getApiData("https://api.covidtracking.com/v1/us/current.json")
    .then(result => {setData(result[0])})
  }, []);

  useEffect(() => {
    getApiData("https://api.covidtracking.com/v1/states/current.json")
    .then(result => {setStates(result.slice(0, 11))})
  }, []);


  return (
    <div className="App">
      <Nav />
      
      <Main vaccineTypes={vaccineTypes}/>
      {vaccineTypes[0] && <Details vaccine={vaccineTypes[0]}/>}

      {data && <Statistics data={data} states={states}/>}
      
      <Footer />
    </div>
  );
}

export default App;



  // useEffect(() => {
  // fetch("https://thevirustracker.com/free-api?global=stats")
  //   .then(response => response.text())
  //   .then(result => setData(result))
  //   .catch(error => console.log('error', error));
  // }, []);