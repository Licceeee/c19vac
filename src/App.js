import React, {useState, useEffect} from 'react';
import './App.css';
import { getContentfulData, getApiData } from './Api'
import { Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Details from './components/Details';
import Statistics from './components/Statistics';
import GlobalStatistics from './components/GlobalStatistics';

function App() {
  const [data, setData] = useState();
  const [vaccineTypes, setVaccineTypes] = useState([]);
  const [states, setStates] = useState([]);
  const [global, setGlobal] = useState();

  // TODO conditional fetching https://api.covid19api.com/summary

  useEffect(() => {
    // getData().then(result => setData(result));    SET ALL DATA
    getContentfulData("vaccineType").then(result => setVaccineTypes(result));
  }, []);


  useEffect(() => {
    // global data
    getApiData("https://api.covidtracking.com/v1/us/current.json")
    .then(result => {setData(result[0])})
  }, []);

  useEffect(() => {
    // data by states
    getApiData("https://api.covidtracking.com/v1/states/current.json")
    .then(result => {setStates(result.slice(0, 11))})
  }, []);


  useEffect(() => {
    // global data <3
    getApiData("https://api.covid19api.com/summary")
    .then(result => {setGlobal(result)})
  }, []);


  return (
    <div className="App">
      <Nav />
      <Switch>

      <Route exact path="/">
          <Main vaccineTypes={vaccineTypes}/>
          {global ? global && <GlobalStatistics data={global}/>
            : data && <Statistics data={data} states={states}/>}

      </Route>


      <Route path="/:id">
          {vaccineTypes && <Details vaccines={vaccineTypes}/>}
      </Route>

      </Switch>

      {/* https://www.youtube.com/watch?v=NkT2yiv-NZ4&ab_channel=uidotdev */}
     
      <Footer />
    </div>
  );
}

export default App;
