import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from "react-router-dom";
import "./Details.css";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    table: {
        minWidth: 650,  
    },
});


// const defaultProps = {
//     bgcolor: 'background.paper',
//     border: 1,
//     m: 1,
//     borderColor: 'text.primary',
//     style: { width: '5rem', height: '5rem' },
// };

const Details = ({ vaccines }) => {
    const classes = useStyles();
    const [vaccine, setVaccine] = useState();
    const { id } = useParams();
    

    useEffect(() => {
        const vac = vaccines.find(element => element.sys.id === id);
        setVaccine(vac);
    }, [id]);
    
    console.log(vaccine);
    
    return (
        <>
        {vaccine ? 
            <div>
                <Box fontSize='2rem'><h1>{vaccine.fields.name}</h1></Box>
                <Box width="70%" mx="auto"><h3>{vaccine.fields.description}</h3></Box>
                <br/>
                <Box width="75%" mx="auto">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Number of doses required</TableCell>
                                    <TableCell align="center">Benefits</TableCell>
                                    <TableCell align="center">Challenges</TableCell>
                                    <TableCell align="center">Other uses</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            <TableRow ><TableCell component="th" scope="row">{vaccine.fields.name}</TableCell>
                                        <TableCell align="center">{vaccine.fields.numberOfDosesRequired}</TableCell>
                                        <TableCell align="center">{vaccine.fields.benefits}</TableCell>
                                        <TableCell align="center">{vaccine.fields.challenges}</TableCell>
                                        <TableCell align="center">{vaccine.fields.otherUsesOfThisTechnology.map(disease=>disease + " ")}</TableCell>
                                    </TableRow>
                                {/* {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right"></TableCell>
                                        <TableCell align="right">{row.type}</TableCell>
                                        <TableCell align="right">{row.cost}</TableCell>
                                        <TableCell align="right">{row.productionIn2021}</TableCell>
                                    </TableRow>
                                ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
            : <p>Can't fetch content</p>}

            <br/>
            <Link to='/' ><button><div className="button"> Go back  </div> </button></Link>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Details;