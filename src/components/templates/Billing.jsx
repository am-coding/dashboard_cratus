import React from 'react';
import StatCard from '../atoms/StatCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import UpcomingPayments from '../molecules/UpcomingPayments';

const statCardData = [
    {
        title: 'Monthly Price Plan',
        stat: '$5.99'   
    },
    { 
        title: 'Annual Price Plan',
        stat: '$65.00'
    },
    {
        title: 'Set Gift Subscription',
        stat: '$50'
    },
    {
        title: 'Trial Time Period',
        stat: '14 days'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: '0 auto',
      [theme.breakpoints.up('xl')]: {
        marginTop: '2rem'
    },
    },
}));

// Analytics Page/Template
const Billing = () => {
    const classes = useStyles();
    return (
        <Grid spacing={5} container className={classes.root}>
            {statCardData.map((data, index) => {
                return(
                    <Grid key={index} xs={12} sm={6} md={3} item>
                        <StatCard title={data.title} stat={data.stat} key={index} />
                    </Grid>
                )
            })}
            <Grid item>
                <UpcomingPayments />
            </Grid>
        </Grid>
    )
}

export default Billing;
