import React from 'react';

import ChipInput from 'material-ui-chip-input';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Add new</h2>

            <Grid container direction="column" alignItems="flex-start" justify="flex-start" spacing={2}>
                <Grid item container spacing={2} >
                    <Grid item xs={4}><TextField size="small" id="name" label="Name" variant="outlined" /></Grid>
                    <Grid item xs={4}><TextField size="small" id="surname" label="Surname" variant="outlined" /></Grid>
                </Grid>

                <Grid item xs={4}><TextField size="small" id="email" label="E-mail" variant="outlined" /></Grid>

                <Grid item xs={4}><TextField size="small" id="phone" label="Phone" variant="outlined" /></Grid>

                <Grid item container direction="row" alignItems="center" spacing={2} >
                    <Grid item container xs="8" alignItems="center" spacing={1} >
                        <Grid item><Typography variant="body1" className={classes.title}>Tags:</Typography></Grid>
                        <Grid item xs={8}>
                            <ChipInput className={classes.root} variant="outlined"
                                defaultValue={['Clients', 'Family']}
                            //   onChange={(chips) => handleChange(chips)}
                            />
                        </Grid>
                    </Grid>

                    <Grid item container xs="4" direction="row" alignItems="flex-end" justify="flex-end" spacing={2}>
                        <Grid item>
                            <Button onClick={props.handleClose} variant="outlined" color="primary">Cancel</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={props.handleClose} variant="contained" color="primary">Save</Button>
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
