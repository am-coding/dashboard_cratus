import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import GameReviewIcon from '../../assets/game-review.png';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        borderRadius: '15px',
        height: '100%'
    },
    title: {
        fontSize: theme.typography.caption.fontSize,
        color: theme.palette.secondary.main,
        fontWeight: theme.typography.fontWeightBold,
        padding: '0rem 0.5rem 0.5rem 1rem'
    }
}))

const GameReview = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography className={classes.title}>Game Reviews</Typography>
                <img width="100%" height="auto" src={GameReviewIcon} alt="game-review" />
        </Paper>
    )
}

export default GameReview;
