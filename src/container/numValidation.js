import React, { useState, useEffect } from 'react';
import { Input, FormControl, Container, Grid, Snackbar, IconButton, Paper, Button } from '@material-ui/core';
import ReactFlagsSelect from 'react-flags-select';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux'
import { setPhoneNo } from '../store/actions';
import useStyles from './styles';
import TextMaskCustom from '../component/mask'

export default function NumValidation() {
    const classes = useStyles();
    const [phonenNo, setphonenNo] = React.useState({
        textmask: '(   )   -       ',
        numberformat: '(+92)342-2426839',
    });

    const dispatch = useDispatch();

    const [property, setProperty] = useState({
        open: false,
        number: 0
    })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setProperty({ ...property, open: false });
    };

    useEffect(() => {
        console.log("Effect-APICalling", property.number)
        if (property.number !== 0) {
            dispatch(setPhoneNo(property.number))
        }
    }, [property.number]);

    const res = useSelector(({ res }) => res);
    console.log(res, "res")

    const numRes = useSelector(({ numRes }) => numRes)

    useEffect(() => {
        console.log(numRes, "numRes")
    }, [numRes]);

    useEffect(() => {
        console.log(phonenNo.textmask.length, "phone")
        if (phonenNo.textmask) {
            console.log("validated")
        }
    }, [phonenNo])

    const handleChange = (event) => {
        setphonenNo({
            ...phonenNo,
            [event.target.name]: event.target.value,
        });
    };

    const testNumber = () => {
        var num = phonenNo.textmask;

        console.log(num, "num")
    }
    return (
        <Container className={classes.root}>
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
            <FormControl>
                <Paper elevation={3} className={classes.paperStyle}>
                    <Grid>
                        <Grid>
                            <ReactFlagsSelect showSelectedLabel={false}
                                defaultCountry="US" />
                            <Input
                                value={phonenNo.textmask}
                                onChange={handleChange}
                                name="textmask"
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustom}
                            />
                            <Button variant="contained" color="primary" href="#contained-buttons" onClick={testNumber}>
                                Link
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </FormControl>
        </Container>
    );
}
