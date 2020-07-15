import React, { useState, useEffect } from 'react';
import { Snackbar, Button, IconButton, TextField, MenuItem, Paper } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import { setPhoneNo } from '../store/actions';
import useStyles from './styles';

const NumValidation = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const [phone, setPhone] = useState(0)
    const [currency, setCurrency] = React.useState('USD');
    const [convertTo, setConversion] = React.useState('TRY');
    const [amount, setAmount] = React.useState(0);
    const [convertedVal, setConverted] = React.useState(0);
    const [currUpdateDate, setDate] = useState(Date.now());
    const [number, setNum] = useState(0)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    useEffect(() => {
            dispatch(setPhoneNo(number))
    }, [number]);

    const numRes = useSelector(({ numRes }) => numRes)

    useEffect(() => {
        console.log(numRes,"numRes")
    }, [numRes]);

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            UNDO
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <div className="container">
                <Paper elevation={3} className={classes.paperStyle}>
                    <div className="row">
                        <div className="col-sm-12 col-12">
                        <TextField
                                label="Contact Number"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"
                                value={phone}
                                onChange={({ target: { value } }) => setPhone(value)}
                                onBlur={setNum(phone)}
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default NumValidation;