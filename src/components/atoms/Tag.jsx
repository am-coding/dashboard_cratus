import React from 'react';
import live from '../../assets/live.svg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.accent.main,
        color: theme.palette.white.main,
        borderRadius: '8px',
        padding: '0.3rem 0.8rem',
        fontSize: theme.typography.caption.fontSize
    },
}));

const Tag = ({title}) => {
    const classes = useStyles()

    return (
        <span className={classes.root}>
            <img src={live} alt="live-icon" />
            <span>{title}</span>
        </span>
    )
}

export default Tag;
