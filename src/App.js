import React, {useState, useEffect} from 'react';
import './App.css';
import { getContentfulData, getApiData } from './Api'
import { Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Details from './components/Details';
import StatesStats from './components/StatesStats';
import GlobalStatsUS from './components/GlobalStatsUS';
import GlobalStats from './components/GlobalStats';
import CountryStats from './components/CountryStats';
import Container from '@material-ui/core/Container';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import CsvDownload from "react-json-to-csv";

function App() {
  const [data, setData] = useState();
  const [vaccineTypes, setVaccineTypes] = useState([]);

  const [states, setStates] = useState([]);
  const [global, setGlobal] = useState();
  const [darkMode, setDarkMode] = useState(true);

  // TODO conditional fetching https://api.covid19api.com/summary

  useEffect(() => {
    try {
      getContentfulData("vaccineType").then(result => setVaccineTypes(result));
    } catch(error) {
      console.log(`connection problem: ${error}`);

    }
  }, []);


  useEffect(() => {
    // global data
    getApiData("https://api.covidtracking.com/v1/us/current.json")
    .then(result => {setData(result[0])})
  }, []);

  useEffect(() => {
    // data by states
    getApiData("https://api.covidtracking.com/v1/states/current.json")
    .then(result => {setStates(result)})
  }, []);


  useEffect(() => {
    // global data :heart:
    getApiData("https://api.covid19api.com/summary")
    .then(result => {
      result.Countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
      setGlobal(result);
    })
  }, []);

  states && console.log(states);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

      <Switch>

        <Route exact path="/">

          {vaccineTypes && <Main vaccineTypes={vaccineTypes}/>}
          <Container maxWidth="lg" id="statistics" name="statistics">
            {global 
              ?
                global && <>
                              <GlobalStats {...global}/>
                              <CountryStats data={global}/>
                          </>
              : 
                data && <>
                            <GlobalStatsUS data={data}/>
                            <StatesStats data={states}/>
                        </>

                // data && <Statistics data={data} states={states}/>
            }
              
          </Container>
        </Route>


        <Route path="/:id">
            {vaccineTypes && <Details vaccines={vaccineTypes}/>}
        </Route>

      </Switch>

      {/* https://www.youtube.com/watch?v=NkT2yiv-NZ4&ab_channel=uidotdev */}
            
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;



  // useEffect(() => {
  //   // global data <3
  //   getApiData("https://api.covid19api.com/summary")
  //   .then(result => {setGlobal(result)})
  // }, []);