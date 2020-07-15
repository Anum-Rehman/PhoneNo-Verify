import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardContent, Container, Grid, Snackbar, IconButton, Paper, Button, TextField } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useDispatch, useSelector } from 'react-redux'
import { setPhoneNo } from '../store/actions';
import useStyles from './styles';
import { parsePhoneNumberFromString } from 'libphonenumber-js'

export default function NumValidation() {
    const classes = useStyles();
    const [phoneNo, setphone] = useState('');
    const [country, setCountry] = useState('US');

    const dispatch = useDispatch();

    const [property, setProperty] = useState({
        open: false,
        number: 0,
        numError: false,
        error: null,
        validateError: '',
        carrier: 'AT&T Mobility LLC',
        country_code: '',
        country_name: 'United States of America',
        country_prefix: '',
        international_format: '+14158586273',
        line_type: '',
        local_format: '4158586273',
        location: 'Novato',
        phoneNumber: '',
        valid: true
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

    const phoneRes = useSelector(({ phoneRes }) => phoneRes)

    useEffect(() => {
        if (phoneRes.numRes) {
            console.log(phoneRes, "data")
            var data = phoneRes.numRes
            if (data.valid) {
                setProperty({
                    ...property,
                    carrier: data.carrier,
                    country_code: data.country_code,
                    country_name: data.country_name,
                    country_prefix: data.country_prefix,
                    international_format: data.international_format,
                    line_type: data.line_type,
                    local_format: data.local_format,
                    location: data.location,
                    phoneNumber: data.number,
                    valid: data.valid
                });
            }
            else {
                setProperty({
                    ...property,
                    error: "Invalid Number",
                    open: true,
                });
            }
        }
        if (phoneRes.error) {
            setProperty({
                ...property,
                error: phoneRes.error.message,
                open: true,
            });
        }
    }, [phoneRes]);

    const handleBlur = () => {
        if (phoneNo !== '') {
            var num = phoneNo.toString()
            var phoneNum = parsePhoneNumberFromString(num)
            num = phoneNum.formatInternational()
            var country = phoneNum.country;

            if (phoneNum.isValid()) {
                setCountry(country)
                setphone(num)
                setProperty({ ...property, validateError: '', numError: false })
            }
            else {
                setProperty({ ...property, validateError: 'Invalid Number', numError: true })
            }
        }
    }

    const testNumber = () => {
        var num = phoneNo;
        setProperty({ ...property, number: num })
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
                message={property.error}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }
            />
            <Card className={classes.paperStyle}>
                <Grid container spacing={3} className={classes.inputGrid}>
                    <Grid item xs={1}>
                        <Avatar variant="square" className={classes.square} src={`https://www.countryflags.io/${country}/shiny/64.png`} />
                    </Grid>
                    <Grid item xs={4} sm={6}>
                        <TextField
                            value={phoneNo}
                            onChange={
                                ({ target: { value } }) => setphone(value)
                            }
                            onBlur={handleBlur}
                            id="formatted-text-mask-input"
                            error={property.numError}
                            helperText={property.validateError}
                        />
                    </Grid>
                    <Grid item xs={3} sm={5}>
                        <Button variant="contained" color="primary" href="#contained-buttons" className={classes.btn} onClick={testNumber}>
                            Verify
                            </Button>
                    </Grid>
                </Grid>

                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <h6>Valid</h6>
                        </Grid>
                        <Grid item xs={6}>
                            {property.valid ? <CheckCircleIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'red' }} />}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h6>Local Format:</h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {property.local_format}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <h6>Intl. Format:</h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {property.international_format}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <h6>Country:</h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {property.country_name}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <h6>Location:</h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {property.location}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <h6>Carrier:</h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {property.carrier}
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <h6>Line Type:</h6>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {property.line_type}
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Container>
    );
}
