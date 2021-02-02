import React from 'react';
import DetailedLineChart from '../atoms/DetailedLineChart';
import { Paper, Box, Typography, IconButton } from '@material-ui/core';
const DownloadChart = () => {
    return (
        <Paper>
            <Box display="flex" justifyContent="space-between">
                <Typography>Downloads</Typography>
                <Box>
                <Typography>09/11/2020</Typography>
                <IconButton></IconButton>
                </Box>
            </Box>
            <DetailedLineChart />
        </Paper>
    )
}

export default DownloadChart;
