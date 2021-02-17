import React from 'react';
import PaddingPieChart from '../atoms/PaddingPieChart'
// import PaymentsGrid from './PaymentsGrid'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
}));

const UpcomingPayments = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
                {/* <PaymentsGrid /> */}
                <PaddingPieChart />
        </Paper>
    )
}

export default UpcomingPayments;
