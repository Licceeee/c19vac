import React, {useState} from 'react';
import Container from '@material-ui/core/Container';

const Statistics = ({ data }) => {
    console.log(data)




// Countries: (190) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// ountries: Array(190)
// [0 … 99]
// 0:
// Country: "Afghanistan"
// CountryCode: "AF"
// Date: "2021-02-18T07:44:06.989Z"
// ID: "72ff31ea-4e33-41c2-9b62-26e2fcf1763c"
// NewConfirmed: 0
// NewDeaths: 0
// NewRecovered: 0
// Premium: {}
// Slug: "afghanistan"
// TotalConfirmed: 55540
// TotalDeaths: 2428
// TotalRecovered: 48626


// Date: "2021-02-18T07:44:06.989Z"
// Global: {NewConfirmed: 238343, TotalConfirmed: 109756340, NewDeaths: 8412, TotalDeaths: 2428161, NewRecovered: 179775, …}
// Date: "2021-02-18T07:44:06.989Z"
// NewConfirmed: 238343
// NewDeaths: 8412
// NewRecovered: 179775
// TotalConfirmed: 109756340
// TotalDeaths: 2428161
// TotalRecovered: 61864922

// ID: "ca6e885b-98dd-4392-8bb9-8830e7539ee2"
// Message: ""
// __proto__: Object


    return (

        <Container maxWidth="lg">
            <h2>Glabal data</h2>
            <table>
                <thead>
                <tr>
                    <th>Total Confirmed</th>
                    <th>Total Recovered</th>
                    <th>Total Death</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.Global.TotalConfirmed}</td>
                    <td>{data.Global.TotalRecovered}</td>
                    <td>{data.Global.TotalDeaths}</td>
                </tr>
                </tbody>       
            </table>

            <h2>Country data</h2>
            <table>
                <thead>
                <tr>
                    <th>Countries</th>
                    <th>Total Confirmed</th>
                    <th>Total Recovered</th>
                    <th>Total Death</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.Countries.map((country, index) => {
                        return  (<tr key={country.ID}>
                                    <td>{country.Country}</td>
                                    <td>{country.TotalConfirmed}</td>
                                    <td>{country.TotalRecovered}</td>
                                    <td>{country.TotalDeaths}</td>
                
                                </tr>)
                    })
                }
                </tbody>
                
            </table>


    </Container>

     
    );
}

export default Statistics;
