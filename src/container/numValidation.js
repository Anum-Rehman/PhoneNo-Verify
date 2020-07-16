import React, { useState, useEffect } from 'react';
import { Avatar, Card, Container, Grid, Button, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { setPhoneNo } from '../store/actions';
import useStyles from './styles';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Detail from '../component/Detail'
import InputText from '../component/InputText'
import Toaster from '../component/Toaster'

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
        validateError: 'Must be in format +123',
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
        if (phoneRes.numRes) {
            var data = phoneRes.numRes
            if (data) {
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
            let phoneNum = parsePhoneNumberFromString(phoneNo.toString());
            if (phoneNum && phoneNum.isValid()) {
                setCountry(phoneNum.country)
                setphone(phoneNum.formatInternational())
                setProperty({ ...property, validateError: '', numError: false, numValidated: false })
            } else {
                setProperty({ ...property, validateError: 'Invalid Number', numError: true, numValidated: true })
            }
        }
    }

    //verify button click
    const testNumber = () => setProperty({ ...property, loading: true, number: phoneNo });

    return (
        <Container className={classes.root}>
            <Toaster
                property={property}
                close={handleClose}
                onClick={handleClose}
            />

            <Card className={classes.paperStyle}>
                <Grid container spacing={3} className={classes.inputGrid}>
                    <Grid item xs={1}>
                        <Avatar variant="square" className={classes.square} src={`https://www.countryflags.io/${country}/shiny/64.png`} />
                    </Grid>
                    <Grid item xs={4} sm={6}>
                        <InputText
                            value={phoneNo}
                            Change={
                                ({ target: { value } }) => setphone(value)
                            }
                            Blur={handleBlur}
                            error={property.numError}
                            text={property.validateError}
                        />
                    </Grid>
                    <Grid item xs={3} sm={5}>
                        <Button variant="contained" color="primary" href="#contained-buttons"
                            className={classes.btn} onClick={testNumber} disabled={property.numValidated}>
                            Verify
                            </Button>
                    </Grid>
                </Grid>

                {property.loading ? <CircularProgress className={classes.progress} /> :
                    <Detail
                        property={property}
                    />
                }
            </Card>
        </Container>
    );
}