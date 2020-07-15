import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Snackbar, Button, IconButton, TextField, MenuItem, Paper, Input, InputLabel, TextField } from '@material-ui/core';
import ReactFlagsSelect from 'react-flags-select';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import { setPhoneNo } from '../store/actions';
import useStyles from './styles';

const NumValidation = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [property, setProperty] = useState({
        open: false,
        phone: 0,
        number: 0
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setProperty({...property, open: false});
    };

    useEffect(() => {
        console.log("Effect-APICalling", property.number)
        dispatch(setPhoneNo(property.number))
    }, [property.number]);

    const res = useSelector(({ res }) => res);
    console.log(res,"res")

    const numRes = useSelector(({ numRes }) => numRes)

    useEffect(() => {
        console.log(numRes, "numRes")
    }, [numRes]);

    useEffect(()=>{
        console.log(property.number,"property")
    },[property.phone])

    const { inputRef, ...other } = props;
    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={property.open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Note archived"
                action={
                    <React.Fragment>
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
                        <ReactFlagsSelect showSelectedLabel={false}
    defaultCountry="US" />

<MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
                            <TextField
                                label="Contact Number"
                                id="outlined-size-small"
                                variant="outlined"
                                size="small"
                                value={property.phone}
                                onChange={({ target: { value } }) => setProperty({...property, phone: value})}                                
                            />
                        </div>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default NumValidation;