import React, { useState, useEffect } from 'react';
import './App.css';
import { getApiData } from './Api'
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
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import BackgroundAni from "./components/BackgroundAni";




function App() {
  const [data, setData] = useState();
  const [vaccineTypes, setVaccineTypes] = useState([]);

  const [states, setStates] = useState([]);
  const [global, setGlobal] = useState();
  const [darkMode, setDarkMode] = useState(true);
  const [userSearch, setUserSearch] = useState("");
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    getApiData("https://obscure-wildwood-82348.herokuapp.com/api/v1/vaccine_types")
    .then(result => {
      setLoading(false);
      setVaccineTypes(result);
    })

  }, []);


  useEffect(() => {
    // global data
    getApiData("https://api.covidtracking.com/v1/us/current.json")
      .then(result => { setData(result[0]) })
  }, []);

  useEffect(() => {
    // data by states
    getApiData(`https://api.covidtracking.com/v1/states/${userSearch}/current.json`)
      .then(result => {
        setStates(result);
      })
  }, []);


  useEffect(() => {
    let url = "https://api.covid19api.com/summary"
    // TODO userSearch 
    //   ?  url = `https://api.covid19api.com/country${userSearch}/status/confirmed`
    //   : url = 
    // global data :heart:
    //          https://api.covid19api.com/country${userSearch}/status/confirmed
    getApiData(url)
      .then(result => {
        result.Countries.sort((a, b) => b.TotalDeaths - a.TotalDeaths);
        setGlobal(result);
      })
  }, []);



  const handleInput = ({ target }) => {
    console.log(target.value);
    setUserSearch(target.value);
  }


  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <Nav userSearch={userSearch} handleInput={handleInput} darkMode={darkMode} setDarkMode={setDarkMode} />

        <Switch>

          <Route exact path="/">


            {vaccineTypes && <Main vaccineTypes={vaccineTypes} loading={loading}/>}
            <Container maxWidth="lg" id="statistics" name="statistics">
              {global 
                ?

                  global && <>
                    <GlobalStats {...global} />
                    <CountryStats data={global} />
                  </>
                  :
                  data && <>
                    <GlobalStatsUS data={data} />
                    <StatesStats data={states} />
                  </>

                  // data && <Statistics data={data} states={states}/>
                }

              </Container>
            </Route>


        <Route exact path="/:id">
            {vaccineTypes && <Details loading={loading} setLoading={setLoading}/>}
        </Route>

      </Switch>
    
      <BackgroundAni />

        {/* https://www.youtube.com/watch?v=NkT2yiv-NZ4&ab_channel=uidotdev */}

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
