import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ContactContext } from '../../contexts/ContactContext';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& td, th": {
      borderLeft: 'solid 1px rgb(224, 224, 224)'
    },
    "& th": {
      fontWeight: 'bold'
    }
  },
});


export default function ContactsTable() {
  const classes = useStyles();
  return (
    <ContactContext.Consumer>
      {({ contacts }) => (
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
              {contacts && contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell scope="row">
                    {contact.name} {contact.surname}
                  </TableCell>
                  <TableCell align="left">{contact.email}</TableCell>
                  <TableCell align="left">{contact.number}</TableCell>
                  <TableCell align="left">{contact.tags}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </ContactContext.Consumer>
  );
}