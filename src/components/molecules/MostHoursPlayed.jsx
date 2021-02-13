import React from 'react'
import { Paper, Box, Typography, Button } from '@material-ui/core'
import CustomLineChart from '../atoms/LineChart'
import { makeStyles } from '@material-ui/core/styles';
import PartnerPortal from '../../assets/partner-portal.png'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1.5rem',
        borderRadius: '15px'
    },
    container: {
        height: '25vh'
    },
    title: {
        fontSize: theme.typography.subtitle1.fontSize,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.h4.fontSize,
        },
    },
    imgContainer: {
        maxWidth: '45%'
    },
     bullet: {
        display: 'inline-block',
        margin: '0 4.5px',
        transform: 'scale(1.8)',
        color: theme.palette.secondary.light,
        [theme.breakpoints.up('xl')]: {
          fontSize: '2rem',
        },
      },
}))

const MostHoursPlayed = () => {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>;
           
    return(
        <Paper className={classes.root}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography className={classes.title}>
                    Most Hours Played
                </Typography>
                <Button disableRipple className={classes.button}>{bull}{bull}{bull}</Button>
            </Box>
            <div className={classes.imgContainer}>
                <img width="100%" height="auto" src={PartnerPortal} alt="partner-portal" />
            </div>
            <div className={classes.container}>
                <CustomLineChart />
            </div>
        </Paper>
    )
}

export default MostHoursPlayed;
