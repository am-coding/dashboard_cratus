import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography, IconButton, Container } from '@material-ui/core';
import LineChart from '../atoms/LineChart';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1.3rem',
        [theme.breakpoints.up('xl')]: {
            padding: '2rem',
        },
        borderRadius: '15px',
        height: '100%',
    },
    title: {
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightMedium,
        fontSize: theme.typography.caption.fontSize,
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.h5.fontSize,
        },
    },
    data: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h6.fontSize,
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.h3.fontSize,
        },
    },
    button: {
        padding: '0.35rem',
    },
    container: {
        maxWidth: '92%',
        height: '67%',
    }
  }));

function RevenueChart({title, data}) {
    const classes = useStyles();
  
    return (
        <Paper className={classes.root}>
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <Typography className={classes.title}>
                        {title}
                    </Typography>
                    <Typography className={classes.data}>
                        {data}
                    </Typography>
                </Box>
                <Box>
                    <IconButton className={classes.button}><img width="100%" height="auto" src={leftArrow} alt="left-arrow-icon" /></IconButton>
                    <IconButton className={classes.button}><img width="100%" height="auto" src={rightArrow} alt="right-arrow-icon" /></IconButton>
                </Box>
            </Box>
            <Container disableGutters={true} className={classes.container}>
            <LineChart />
            </Container>
        </Paper>
    );
}

export default RevenueChart;

