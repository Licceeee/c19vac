import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from "react-router-dom";

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

function createData(name, effectiveness, type, cost, productionIn2021) {
    return { name, effectiveness, type, cost, productionIn2021};
}   

const rows = [
    createData('PFIZER-BIONTECH', "95%", 'mRNA-based', '$20', '1.3 billion doses'),
    createData('MODERNA', "94,10%", 'mRNA-based', "$15-25", '1 billion doses'),
    createData('ASTRAZENECA-OXFORD', "70%", 'adenovirus vector', '$4', '3 billion doses'),
    createData('X', 0, 0, 0, 0),
    createData('Y', 0, 0, 0, 0),
];

const defaultProps = {
    bgcolor: 'background.paper',
    border: 1,
    m: 1,
    borderColor: 'text.primary',
    style: { width: '5rem', height: '5rem' },
};

const Details = ({ vaccines }) => {

    const classes = useStyles();

    const [vaccine, setVaccine] = useState();
    
    const { id } = useParams();
    

    useEffect(() => {
        const vac = vaccines.find(element => element.sys.id === id);
        setVaccine(vac);
    }, [id]);
    

    return (
        <div>
            <h1>{vaccine && vaccine.fields.name}</h1>
            <h3>Companies that r producing it + description</h3>
            <Box border={10} borderRadius={15} borderColor="text.disabled" width="75%" mx="auto">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Vaccine name</TableCell>
                                <TableCell align="right">Effectiveness</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Cost per dose</TableCell>
                                <TableCell align="right">Predicted production in 2021</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right">{row.type}</TableCell>
                                    <TableCell align="right">{row.cost}</TableCell>
                                    <TableCell align="right">{row.productionIn2021}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <br/>

            <Link to='/' ><button> Go back home </button></Link>
            
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
}

export default Details;