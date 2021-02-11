import React from 'react'
import Table from '../atoms/Table'
import { Paper, Box, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2rem',
      borderRadius: '15px',
      height: '100%'
    },
    button: {
        padding: '0.35rem',
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: theme.typography.fontWeightBold
    }
  }));

//Subscribers table components to display subcscribers/new subscribers
const Subscribers = ({title, data}) => {
    const classes= useStyles()

    return (
        <Paper className={classes.root}>
            <Box className={classes.box} display="flex" justifyContent="space-between">
                <Typography className={classes.title}>{title}</Typography>
                 <Box>
                    <IconButton className={classes.button}><img width="100%" height="auto" src={leftArrow} alt="left-arrow-icon" /></IconButton>
                    <IconButton className={classes.button}><img width="100%" height="auto" src={rightArrow} alt="right-arrow-icon" /></IconButton>
                </Box>
            </Box>
            <Table subscribers={data} />
        </Paper>
    )
}

export default Subscribers;
