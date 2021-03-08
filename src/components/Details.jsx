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

const path_dev = process.env.REACT_APP_DEV_SERVER_URL;
const path_prod = process.env.REACT_APP_DEV_PROD_URL;

const Details = ({ loading, setLoading }) => {

    const classes = useStyles();
    const [vaccine, setVaccine] = useState();
    const [vaccines, setVaccines] = useState();
    const [otherUses, setOtherUses] = useState();

    const { id } = useParams();
    

    useEffect(() => {
        setLoading(true);
        getApiData(`https://obscure-wildwood-82348.herokuapp.com/api/v1/vaccine_types/${id}`)
        .then(result => {
          setLoading(false);
          setVaccine(result.vaccineType);
          setVaccines(result.relatedVaccines);
          setOtherUses(result.otherUses);
        })
      }, [id]);

      vaccine && console.log(vaccines)

    return (
        <>
        {loading 
        
        ?
    
            <Loading />
    
    
        :
    
            vaccine 
            ? 

                
                <div className={classes.boxClass}>

                    <Box width="70%" mx="auto" fontSize='2rem'><h1>{vaccine.name}</h1></Box>
                    <Box width="70%" mx="auto" marginBottom="20px"><p>{vaccine.description}</p></Box>

                    <Box width="70%" mx="auto" marginBottom="20px"><h2>Benefits</h2></Box>
                    <Box width="70%" mx="auto" ><p>{vaccine.benefits}</p></Box>


                    <Box width="70%" mx="auto" marginBottom="20px"><h2>Challenges</h2></Box>
                    <Box width="70%" mx="auto" ><p>{vaccine.challenges}</p></Box>

                    <Box width="70%" mx="auto" marginBottom="20px"><h2>Companies producing this type vaccine</h2></Box>
                    <Box width="70%" mx="auto" display="flex">
                    {vaccines && vaccines.map((vaccine) => {
                                return (
                                    <Box key={vaccine.id} marginRight="20px">
                                        <h5>{vaccine.name}</h5>
                                        <img src={`https://obscure-wildwood-82348.herokuapp.com/static/${vaccine.img}`} height="100"></img>
                                    </Box>
                                )})
                        }
                    
                    </Box>

                    <br/>


                    <Box width="70%" mx="auto">
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow >
                                        <TableCell className={classes.tableBG}>Vaccines</TableCell>
                                        <TableCell className={classes.tableBG}># doses required</TableCell>
                                        <TableCell className={classes.tableBG}>Other uses</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell>
                                                    {vaccines 
                                                        ? vaccines.map(
                                                            (vaccine) => {
                                                                return <p key={vaccine.id}>{vaccine.name}</p>})
                                                        : "/" 
                                                    }
                                        </TableCell>
                                        <TableCell>{vaccine.numberofdosesrequired}</TableCell>
                                        <TableCell>
                                                    {otherUses 
                                                        ? otherUses.map(
                                                            (use) => {
                                                                return <p key={use.id}>{use.name}</p>})
                                                        : "/" 
                                                    }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </div>
            : 
                <p>No data available</p>
                
        }
        <br/>
        <br/>
        <br/>
        <Link to='/' className="custom-box-link">
            <a href="#">Back</a>
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