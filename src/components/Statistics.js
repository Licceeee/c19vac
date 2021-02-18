import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Heading from './Heading'

const Statistics = ({data, states}) => {

    // states && console.log(states)

    // const newArr = states.slice(0, 11)

    return (

        <Container maxWidth="lg" id="statistics" name="statistics">
            <Heading text="Global data" />
            <table>
                <thead>
                <tr>
                    <th>Total Infected</th>
                    <th>hospitalizedCurrently</th>
                    <th>Total Death</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.positive}</td>
                    <td>{data.hospitalized}</td>
                    <td>{data.death}</td>
                </tr>
                </tbody>       
            </table>

            <Heading text="States data" />
            <table>
                <thead>
                <tr>
                    <th>State</th>
                    <th>Total</th>
                    <th>positive</th>
                    <th>recovered</th>
                    <th>death</th>
                </tr>
                </thead>
                <tbody>
                {
                    states && states.map((state) => {
                        return  (<tr key={state.hash}>
                                    <td>{state.state}</td>
                                    <td>{state.total}</td>
                                    <td>{state.positive}</td>
                                    <td>{state.recovered}</td>
                                    <td>{state.death}</td>
                                </tr>)
                    })
                }
                </tbody>
                
            </table>


    </Container>

     
    );
}

export default Statistics;
