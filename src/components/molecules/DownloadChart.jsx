import React from 'react';
import DetailedLineChart from '../atoms/DetailedLineChart';
import { Paper, Box, Typography, IconButton, Container } from '@material-ui/core';
import downArrow from '../../assets/down-arrow.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '1rem',
      borderRadius: '15px',
    }, 
    box: {
        marginBottom: '0.4rem'
    },
    text: {
        fontSize: theme.typography.subtitle2.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.secondary.main
    },
    date: {
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.secondary.main
    },
    container: {
        paddingRight: '1.5rem'
    }
  }));

const DownloadChart = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.box}>
                <Typography className={classes.text}>Downloads</Typography>
                <Box display="flex" alignItems="center">
                <Typography className={classes.date}>09/11/2020</Typography>
                <IconButton><img src={downArrow} alt="down-arrow-icon" /></IconButton>
                </Box>
            </Box>
           <Container className={classes.container} disableGutters={true}>
            <DetailedLineChart />
            </Container>
        </Paper>
    )
}

export default DownloadChart;
