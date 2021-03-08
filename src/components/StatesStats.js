import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Heading from './Heading'



const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    tableBG: {
        backgroundColor: '#3649A5',
        color: '#fff',
    }
});

const StatesStats = ({ data }) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    return (
        <>
            <Heading text="USA highest covid cases by state" />
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBG}>States</TableCell>
                                <TableCell className={classes.tableBG}>Total</TableCell>
                                <TableCell className={classes.tableBG}>Positive</TableCell>
                                <TableCell className={classes.tableBG}>Total Recovered</TableCell>
                                <TableCell className={classes.tableBG}>Total Death</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((state) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={state.hash}>
                                        <TableCell>
                                            {state.state}
                                        </TableCell>
                                        <TableCell>
                                            {state.total}
                                        </TableCell>
                                        <TableCell>
                                            {state.positive}
                                        </TableCell>
                                        <TableCell>
                                            {state.recovered}
                                        </TableCell>
                                        <TableCell>
                                            {state.death}
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}

export default StatesStats;


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
    tableBG: {
        backgroundColor: '#3649A5',
        color: '#fff',
    }
  });