import React, {useState, useEffect} from 'react';
import './App.css';
import { getData } from './Api'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  // const [data, setData] = useState();    GET ALL DATA
  const [vaccineType, setVaccineType] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
      try {
        // getData().then(result => setData(result));    SET ALL DATA
        getData("pharmaCompany").then(result => setCompanies(result));
        getData("vaccineType").then(result => setVaccineType(result));

      } catch (error) {
          console.log(error);
      }
  }, []);

  return (
    <div className="App">
      <Nav />
      <Main companies={companies} vaccineType={vaccineType}/>
      <Footer />
    </div>
  );
}

export default App;
