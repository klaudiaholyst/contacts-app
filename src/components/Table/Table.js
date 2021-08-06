import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


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
      {({ contacts, activeTag, dispatch, showTrash }) => (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table" variant="body">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="left">E-mail</TableCell>
                <TableCell align="left">Phone number</TableCell>
                <TableCell align="left">Tags</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {showTrash && contacts.filter(item=> item.inTrash).map(contact =>(
                <TableRow key={contact.id}>
                <TableCell scope="row">
                  {contact.name} {contact.surname}
                </TableCell>
                <TableCell align="left">{contact.email}</TableCell>
                <TableCell align="left">{contact.number}</TableCell>
                <TableCell align="left">{contact.tags}</TableCell>
                <TableCell align="center"><AddIcon onClick={() => dispatch({type:'PUT_OUTSIDE_TRASH', payload: contact.id})}/></TableCell>
              </TableRow>
              ))}
              {!showTrash && contacts && contacts.filter(item => item.tags.includes(activeTag)).filter(item => !item.inTrash).map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell scope="row">
                    {contact.name} {contact.surname}
                  </TableCell>
                  <TableCell align="left">{contact.email}</TableCell>
                  <TableCell align="left">{contact.number}</TableCell>
                  <TableCell align="left">{contact.tags}</TableCell>
                  <TableCell align="center"><DeleteIcon onClick={() => dispatch({type:'PUT_TO_TRASH', payload: contact.id})}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </ContactContext.Consumer>
  );
}