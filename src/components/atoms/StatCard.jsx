import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button, CardActions } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '15px',
        boxShadow: '0px 2.4px 1.5px rgba(0, 0, 0, 0.25)',
        minWidth: '11rem',
      },
      content: {
        textAlign: 'center',
        padding: 0,
        '&:last-child': {
            paddingBottom: 8,
        },
      },
      stat: { 
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 17
      },
      title: {
          fontSize: 10,
          color: theme.palette.secondary.main,
          fontWeight: theme.typography.fontWeightBold,
          marginTop: '0.4rem'
      },
      bullBtn: {
          padding: 0,
          display: 'flex',
          justifyContent: 'flex-end'
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(1.1)',
        color: theme.palette.secondary.light,
      },
      button: {
        padding: 0,
        '&:hover': {
            background: 'none'
        }
      }
}));

function StatCard({stat, title}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
        <CardActions className={classes.bullBtn}>
            <Button disableRipple className={classes.button}>{bull}{bull}{bull}</Button>
        </CardActions>
      <CardContent className={classes.content}>
        <Typography className={classes.stat}>
            {stat}
        </Typography>
        <Typography className={classes.title} variant="body1">
            {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatCard;
