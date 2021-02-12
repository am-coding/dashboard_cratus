import React from 'react'
import { Paper, Container, Box, Typography, Button } from '@material-ui/core'
import CustomLineChart from '../atoms/LineChart'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1.5rem'
    },
    container: {
        height: '25vh'
    }
}))

const MostHoursPlayed = () => {
    const classes = useStyles()
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <Paper className={classes.root}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>
                    Most Hours Played
                </Typography>
                <Button disableRipple className={classes.button}>{bull}{bull}{bull}</Button>
            </Box>
            <Container className={classes.container}>
                <CustomLineChart />
            </Container>
        </Paper>
    )
}

export default MostHoursPlayed;
