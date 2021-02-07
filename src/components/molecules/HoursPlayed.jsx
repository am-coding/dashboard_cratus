import React from 'react';
import StraightLineChart from '../atoms/StraightLineChart';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      padding: '0.5rem',
      borderRadius: '15px',
    },
    title: {
        fontSize: theme.typography.subtitle2.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.secondary.main,
        padding: '1rem 1rem 0rem 1.5rem',
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.h6.fontSize,
        },
    },
  }));


const HoursPlayed = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Typography className={classes.title}>Hours Played</Typography>
            <StraightLineChart />
        </Paper>
    )
}

export default HoursPlayed;
