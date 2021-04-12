import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { Route } from '../utils/models';

const StyleTableCell = withStyles((theme: Theme) =>
createStyles({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}),
)(TableCell);

const StyleLedTableRow = withStyles((theme: Theme) => 
createStyles({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}),
) (TableRow);

const useStyles = makeStyles({
    table: {
        minWidth:700,
    }
})

export default function CustomizedTables(routes: Route[]) {
    const classes = useStyles();
    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="table">
                <TableHead>
                    <TableRow>
                        <StyleTableCell>Title</StyleTableCell>
                        <StyleTableCell align="right">Start Position</StyleTableCell>
                        <StyleTableCell align="right">End Position</StyleTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {routes.map((rota) => (
                        <StyleLedTableRow key={rota._id}>
                            <StyleTableCell component="th" scope="row">
                                {rota.title}
                            </StyleTableCell>
                            <StyleTableCell align="right">Lat: {rota.startPosition.lat} -- Long: {rota.startPosition.long}</StyleTableCell>
                            <StyleTableCell align="right">Lat: {rota.endPosition.lat} -- Long: {rota.endPosition.long}</StyleTableCell>
                        </StyleLedTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}