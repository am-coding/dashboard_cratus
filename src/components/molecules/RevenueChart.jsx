import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography } from '@material-ui/core';
import LineChart from '../atoms/LineChart';

// const useStyles = makeStyles((theme) => ({
//     root: {
//     },
//   }));

function RevenueChart({title, data}) {
    // const classes = useStyles();
  
    return (
        <Paper style={{padding: '2rem', borderRadius: '12px'}}>
            <Box>
                <Box>
                    <Typography variant="subtitle1">
                        {title}
                    </Typography>
                    <Typography variant="h2">
                        {data}
                    </Typography>
                </Box>

            </Box>
            <LineChart />
        </Paper>
    );
}

export default RevenueChart;

