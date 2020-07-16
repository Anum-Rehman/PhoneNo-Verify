import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardContent, Container, Grid, Snackbar, IconButton, Button, TextField, CircularProgress } from '@material-ui/core';
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
        valid: true,
        numValidated: true,
        loading: false
    })

     // handling close
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setProperty({ ...property, open: false });
    };

    // calling api on componentDidMount
    useEffect(() => {
        if (property.number !== 0) {
            dispatch(setPhoneNo(property.number))
        }
    }, [property.number]);

    // getting api res from reducer
    const phoneRes = useSelector(({ phoneRes }) => phoneRes)

    // once got res/ api called, set initials
    useEffect(() => {
        if(phoneRes.numRes){
            var data = phoneRes.numRes
            if(data){
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
                    valid: data.valid,
                    loading: false
                });
            }
        }
        if (phoneRes.error) {
            setProperty({
                ...property,
                error: phoneRes.error.message,
                open: true,
                loading: false
            });
        }
    }, [phoneRes]);

    //Validating number on blur
    const handleBlur = () => {
        if (phoneNo !== '') {
            var num = phoneNo.toString()
            var phoneNum = parsePhoneNumberFromString(num)
            num = phoneNum.formatInternational()
            var country = phoneNum.country;

            if (phoneNum.isValid()) {
                setCountry(country)
                setphone(num)
                setProperty({ ...property, validateError: '', numError: false, numValidated: false })
            }
            else {
                setProperty({ ...property, validateError: 'Invalid Number', numError: true, numValidated: true })
            }
        }
    }

    //verify button click
    const testNumber = () => {
        var num = phoneNo;
        setProperty({ ...property, loading: true, number: num })
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
                        <Button variant="contained" color="primary" href="#contained-buttons" 
                        className={classes.btn} onClick={testNumber} disabled={property.numValidated}>
                            Verify
                            </Button>
                    </Grid>
                </Grid>

               { property.loading ? <CircularProgress className={classes.progress} /> :
               <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <h6>Valid</h6>
                    </Grid>
                    <Grid item xs={6}>
                        {property.valid ? <CheckCircleIcon style={{color:'green'}}/> : <CancelIcon style={{color:'red'}}/>}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h6>Local Format:</h6>
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
                }
            </Card>
        </Container>
    );
}
