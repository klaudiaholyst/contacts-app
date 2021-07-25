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

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Add new
      </Button>
      <Modal openModal={openModal} handleCloseModal={handleCloseModal} />
    </div>
  );
}