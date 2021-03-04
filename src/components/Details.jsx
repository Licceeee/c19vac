import React, {useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { getApiData } from '../Api'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Loading from './Loading'


const Details = ({ loading, setLoading }) => {

    const classes = useStyles();
    const [vaccine, setVaccine] = useState();
    const { id } = useParams();
    

    useEffect(() => {
        setLoading(true);
        getApiData(`http://localhost:9000/api/v1/vaccine_types/${id}`)
        .then(result => {
          setLoading(false);
          setVaccine(result);
        })
      }, [id]);

      vaccine && console.log(vaccine)

    return (
        <>
        {loading 
        
        ?
    
            <Loading />
    
    
        :
    
            vaccine 
            ? 

                <p>YAAAAYYY</p>
                // <div className={classes.boxClass}>
                //     <Box width="70%" mx="auto" fontSize='2rem'><h1>{vaccine.fields.name}</h1></Box>
                //     <Box width="70%" mx="auto" marginBottom="20px"><p>{vaccine.fields.description}</p></Box>

                //     <Box width="70%" mx="auto" marginBottom="20px"><h2>Benefits</h2></Box>
                //     <Box width="70%" mx="auto" ><p>{vaccine.fields.benefits}</p></Box>


                //     <Box width="70%" mx="auto" marginBottom="20px"><h2>Challenges</h2></Box>
                //     <Box width="70%" mx="auto" ><p>{vaccine.fields.challenges}</p></Box>
                //     <br/>


                //     <Box width="70%" mx="auto">
                //         <TableContainer component={Paper}>
                //             <Table className={classes.table} aria-label="simple table">
                //                 <TableHead>
                //                     <TableRow >
                //                         <TableCell className={classes.tableBG}>Vaccines</TableCell>
                //                         <TableCell className={classes.tableBG}># doses required</TableCell>
                //                         <TableCell className={classes.tableBG}>Other uses</TableCell>
                //                     </TableRow>
                //                 </TableHead>
                //                 <TableBody>
                //                     <TableRow >
                //                         <TableCell>{vaccine.fields.vaccines 
                //                                                         ? vaccine.fields.vaccines.map(
                //                                                             (vaccine, index) => {
                //                                                                 return <p key={index}>{vaccine.fields.name}</p>})
                //                                                         : "/" }
                //                         </TableCell>
                //                         <TableCell>{vaccine.fields.numberOfDosesRequired}</TableCell>
                //                         <TableCell>{vaccine.fields.otherUsesOfThisTechnology 
                //                                                         ?  vaccine.fields.otherUsesOfThisTechnology.map(
                //                                                             (disease, index) => {
                //                                                                 return <p key={index}>{disease}</p>}) 
                //                                                         : "/" }
                //                         </TableCell>
                //                     </TableRow>
                //                 </TableBody>
                //             </Table>
                //         </TableContainer>
                //     </Box>
                // </div>
            : 
                <p>No data available</p>
                
        }
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


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    boxClass: {
        textAlign: 'left',
        marginBottom: 20,
    },
    tableBG: {
        backgroundColor: '#3649A5',
        color: '#fff',
    }
});


// const defaultProps = {
//     bgcolor: 'background.paper',
//     border: 1,
//     m: 1,
//     borderColor: 'text.primary',
//     style: { width: '5rem', height: '5rem' },
// };