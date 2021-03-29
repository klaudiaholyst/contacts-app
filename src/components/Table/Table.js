import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  "& td, th": {
    borderLeft: 'solid 1px rgb(224, 224, 224)'
  },
  "& th": {
    fontWeight: 'bold'
  }},
});

function createData(name, email, phoneNumber, tags) {
  return { name, email, phoneNumber, tags };
}

const rows = [
  createData('John Snow', 'johnyys@test.com', '+43 687 125 458', 'clients'),
  createData('Mary Winter', 'mary@test.com', '+43 654 213 215', 'friends')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" variant="body">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">E-mail</TableCell>
            <TableCell align="left">Phone number</TableCell>
            <TableCell align="left">Tags</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phoneNumber}</TableCell>
              <TableCell align="left">{row.tags}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}