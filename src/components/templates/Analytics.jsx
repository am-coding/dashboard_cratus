import React from 'react';
import StatCard from '../atoms/StatCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import RevenueChart from '../molecules/RevenueChart'
import GameReview from '../molecules/GameReview';
import DownloadChart from '../molecules/DownloadChart';
import CustomerStats from '../molecules/CustomerStats';
import HoursPlayed from '../molecules/HoursPlayed';

const statCardData = [
    {
        title: 'MRR',
        stat: '$23,285.00'
    },
    {
        title: 'Active Subscription',
        stat: '4,756'
    },
    {
        title: 'Churn',
        stat: '5.2%'
    },
    {
        title: 'New Customers',
        stat: '612'
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: '0 auto'
    },
  }));

// Analytics Page/Template
const Analytics = () => {
    const classes = useStyles();
    return (
        <Grid spacing={8} container className={classes.root}>
            {statCardData.map((data, index) => {
                return(
                    <Grid key={index} xs={12} sm={6} md={3} item>
                        <StatCard title={data.title} stat={data.stat} key={index} />
                    </Grid>
                )
            })}
            <Grid xs={12} md={9} item>
                <RevenueChart 
                    title="Revenue to Date"
                    data="$115,323.00"
                />
            </Grid>
            <Grid xs={6} md={3} item>
                <GameReview />
            </Grid>
            <Grid xs={6} item>
                <DownloadChart />
            </Grid>
            <Grid xs={3} item>
                <HoursPlayed />
            </Grid>
            <Grid xs={3} item>
                <CustomerStats />
            </Grid>
        </Grid>
    )
}

export default Analytics;
