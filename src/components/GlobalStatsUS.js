import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Heading from './Heading'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableBG: {
    backgroundColor: '#3649A5',
    color: '#fff',
}
});

const GlobalStatsUS = ({data}) => {
  const classes = useStyles();

  return (

    <>
    <Heading text="Global data" id="statistics" name="statistics"/>

    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className={classes.tableBG}>Total Infected</TableCell>
            <TableCell className={classes.tableBG}>Currently hospitalized</TableCell>
            <TableCell className={classes.tableBG}>Total Death</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>{data.positive}</TableCell>
              <TableCell>{data.hospitalized}</TableCell>
              <TableCell>{data.death}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default GlobalStatsUS;