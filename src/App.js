import React, {useState, useEffect} from 'react';
import './App.css';
import { getData } from './Api'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import Vaccine from './components/Vaccine';
import Statistics from './components/Statistics';

function App() {
  // const [data, setData] = useState();    GET ALL DATA
  const [vaccineType, setVaccineType] = useState([]);

  useEffect(() => {
      try {
        // getData().then(result => setData(result));    SET ALL DATA
        getData("vaccineType").then(result => setVaccineType(result));

      } catch (error) {
          console.log(error);
      }
  }, []);

  return (
    <div className="App">
      <Nav />
      <Main vaccineType={vaccineType}/>
      <Vaccine />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
