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

const CountryStats = ({ data }) => {
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
            <Heading text="World highest covid cases by country" />
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableBG}>Countries</TableCell>
                                <TableCell className={classes.tableBG}>Total Confirmed</TableCell>
                                <TableCell className={classes.tableBG}>Total Death</TableCell>
                                <TableCell className={classes.tableBG}>Total Recovered</TableCell>
                                <TableCell className={classes.tableBG}>New Confirmed</TableCell>




                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.Countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((country) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={country.ID}>
                                        <TableCell>
                                            {country.Country}
                                        </TableCell>
                                        <TableCell>
                                            {country.NewConfirmed}
                                        </TableCell>
                                        <TableCell>
                                            {country.TotalConfirmed}
                                        </TableCell>
                                        <TableCell>
                                            {country.TotalRecovered}
                                        </TableCell>
                                        <TableCell>
                                            {country.TotalDeaths}
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
                    count={data.Countries.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    );
}

export default CountryStats;