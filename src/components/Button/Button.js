import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Modal from '../Modal/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      float: 'right'
    },
  },
}));

export default function ContainedButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add new
      </Button>
      <Modal open={open} handleClose={handleClose} />
    </div>
  );
}