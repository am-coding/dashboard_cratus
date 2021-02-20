import React from 'react';
import { Typography, Box } from '@material-ui/core'
import Tag from '../atoms/Tag';
import CustomButton from '../atoms/CustomButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: '30%',
        left: '5%',
        maxWidth: '50%'
    },
    heading: {
        color: theme.palette.white.main,
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        lineHeight: '3rem'
    },
    text: {
        display: 'flex'
    },
    subtitle: {
        color: theme.palette.white.main,
        fontSize: theme.typography.subtitle2.fontSize
    }
}));

const HeaderBox = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Tag title="New" />
            <Typography className={classes.heading}>
                Select your legend and get ready to battle!
            </Typography>
            <Box className={classes.text}>
                <Typography className={classes.subtitle}>Leauge of Legends</Typography>
                <Typography className={classes.subtitle}>English</Typography>
            </Box>
            <CustomButton title="Install" />
        </Box>
    )
}

export default HeaderBox;
