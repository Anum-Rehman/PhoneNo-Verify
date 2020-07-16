import React from 'react';
import { CardContent, Grid } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from '../container/styles';

export default function Detail(props) {
    const classes = useStyles();
    const detailProp = props.property
    return (
        <CardContent>
            <Grid container>
                <Grid item xs={6} className={classes.detail}>
                    <h6>Valid</h6>
                </Grid>
                <Grid item xs={6} className={classes.detail}>
                    {detailProp.valid ? <CheckCircleIcon style={{ color: 'green' }} /> : <CancelIcon style={{ color: 'red' }} />}
                </Grid>
                <Grid item xs={12} sm={6} className={classes.detail}>
                    <h6>Local Format:</h6>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.detail}>
                    <p>{detailProp.local_format}</p>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.detail}>
                    <h6>Intl. Format:</h6>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.detail}>
                    <p>{detailProp.international_format}</p>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.detail}>
                    <h6>Country:</h6>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.detail}>
                    <p>{detailProp.country_name}</p>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.detail}>
                    <h6>Location:</h6>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.detail}>
                    <p>{detailProp.location}</p>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.detail}>
                    <h6>Carrier:</h6>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.detail}>
                    <p>{detailProp.carrier}</p>
                </Grid>

                <Grid item xs={12} sm={6} className={classes.detail}>
                    <h6>Line Type:</h6>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.detail}>
                    <p>{detailProp.line_type}</p>
                </Grid>
            </Grid>

        </CardContent>
    )
}