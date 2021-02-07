import React from 'react';
import CustomPieChart from '../atoms/PieChart';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid } from '@material-ui/core';
import RectangleIndie from '../../assets/Rectangle-rpg.png';
import RectangleAction from '../../assets/Rectangle-indie.png';
import RectangleRPG from '../../assets/Rectangle-action.png';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100%',
      padding: '1.5rem',
      borderRadius: '15px',
    }, 
    gridContainer: {
      maxWidth: '64%',
      margin: '0 auto',
      alignItems: 'center',
      textAlign: 'center',
      [theme.breakpoints.up('xl')]: {
        maxWidth: '34%',
      },
    },
    title: {
        fontSize: theme.typography.subtitle2.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.secondary.main,
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.h6.fontSize,
        },
    },
    label: {
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.secondary.main,
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.h6.fontSize,
        },
    }
  }));

const CustomerStats = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography className={classes.title}>Customer Stats</Typography>
            <CustomPieChart />
            <Grid className={classes.gridContainer} container>
                <Grid item xs={6}><img src={RectangleRPG} alt="rectangle-rpg" /></Grid>
                <Grid item xs={6}><Typography className={classes.label}>RPG</Typography></Grid>
                <Grid item xs={6}><img src={RectangleIndie} alt="rectangle-indie" /></Grid>
                <Grid item xs={6}><Typography className={classes.label}>Indie</Typography></Grid>
                <Grid item xs={6}><img src={RectangleAction} alt="rectangle-action" /></Grid>
                <Grid item xs={6}><Typography className={classes.label}>Action</Typography></Grid>
            </Grid>
        </Paper>
    )
}

export default CustomerStats;
