import React, { useState, useContext } from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';

import { ContactContext } from '../../contexts/ContactContext';

import './Modal.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  formControl: {
    margin: theme.spacing(1),
    width: '300px'
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(tag, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SimpleModal(props) {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const theme = useTheme();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [tag, setTag] = useState([]);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleEmptyForm = ()=>{
    setName('');
    setSurname('');
    setEmail('');
    setNumber('');
    setTag([]);
  }

  const { dispatch, tagsList } = useContext(ContactContext);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_CONTACT', contact: { name, surname, email, number, tag } });
    handleEmptyForm();
    props.handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add new</h2>

      <Grid container direction="column" alignItems="flex-start" justify="flex-start" spacing={2}>
        <Grid item container spacing={2} >
          <Grid item xs={4}><TextField onChange={(e) => setName(e.target.value)} size="small" id="name" label="Name" variant="outlined" /></Grid>
          <Grid item xs={4}><TextField onChange={(e) => setSurname(e.target.value)} size="small" id="surname" label="Surname" variant="outlined" /></Grid>
        </Grid>

        <Grid item xs={4}><TextField onChange={(e) => setEmail(e.target.value)} size="small" id="email" label="E-mail" variant="outlined" /></Grid>

        <Grid item xs={4}><TextField onChange={(e) => setNumber(e.target.value)} size="small" id="number" label="Phone" variant="outlined" /></Grid>

        <Grid item container direction="row" alignItems="center" spacing={2} >
          <Grid item container xs={8} alignItems="center" spacing={1} >
            <Grid item><Typography variant="body1" className={classes.title}>Tags:</Typography></Grid>
            <Grid item xs={8}>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-mutiple-chip-label"
                  id="demo-mutiple-chip"
                  multiple
                  value={tag}
                  onChange={handleChange}


                  input={<OutlinedInput className="input-modified" />}
                  renderValue={(selected) => (
                    <div className={classes.chips}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} className={classes.chip} />
                      ))}
                    </div>
                  )}
                  MenuProps={MenuProps}
                >
                  {tagsList.map((tag) => (
                    <MenuItem key={tag} value={tag} style={getStyles(tag, tag, theme)}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item container xs={4} direction="row" alignItems="flex-end" justify="flex-end" spacing={2}>
            <Grid item>
              <Button onClick={props.handleClose} variant="outlined" color="primary">Cancel</Button>
            </Grid>
            <Grid item>
              <Button onClick={handleClick} variant="contained" color="primary">Save</Button>
            </Grid>
          </Grid>
        </Grid></Grid>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
