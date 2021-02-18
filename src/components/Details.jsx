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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,  
    },
    boxClass: {
        textAlign: 'left',
        marginBottom: 20,
    }
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
        
    return (
        <>
        {vaccine ? 
            <div>
                <Box width="70%" mx="auto" fontSize='2rem' textAlign="left"><h1>{vaccine.fields.name}</h1></Box>
                <Box width="70%" mx="auto" textAlign="left" marginBottom="20px"><p>{vaccine.fields.description}</p></Box>

                <Box width="70%" mx="auto" textAlign="left" marginBottom="20px"><h3>Benefits</h3></Box>
                <Box width="70%" mx="auto" className={classes.boxClass}><p>{vaccine.fields.benefits}</p></Box>


                <Box width="70%" mx="auto" textAlign="left" marginBottom="20px"><h3>Challenges</h3></Box>
                <Box width="70%" mx="auto" className={classes.boxClass}><p>{vaccine.fields.challenges}</p></Box>
                <br/>


                <Box width="70%" mx="auto">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow textAlign="left">
                                    <TableCell>Vaccines</TableCell>
                                    <TableCell># doses required</TableCell>
                                    <TableCell>Other uses</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell>{vaccine.fields.vaccines 
                                                                    ? vaccine.fields.vaccines.map(
                                                                        (vaccine, index) => {
                                                                            return <p key={index}>{vaccine.fields.name}</p>})
                                                                    : "/" }
                                    </TableCell>
                                    <TableCell>{vaccine.fields.numberOfDosesRequired}</TableCell>
                                    <TableCell>{vaccine.fields.otherUsesOfThisTechnology 
                                                                    ?  vaccine.fields.otherUsesOfThisTechnology.map(
                                                                        (disease, index) => {
                                                                            return <p key={index}>{disease}</p>}) 
                                                                    : "/" }
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
            : <p>No data available</p>}
            <br/>
            <br/>
            <br/>
            <Link to='/' >
                <Button variant="contained" color="secondary">
                    Go back
                </Button>
            </Link>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default Details;