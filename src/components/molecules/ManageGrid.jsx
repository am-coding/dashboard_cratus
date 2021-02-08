import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ChatIcon from '../../assets/Chat.png';
import NotificationIcon from '../../assets/Notification.png';
import AvatarIcon from '../../assets/Avatar.png';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }, 
    link: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.subtitle2.fontSize,
        [theme.breakpoints.up('xl')]: {
          fontSize: theme.typography.h6.fontSize,
        },
    }
  }));

// Header Manage Grid
const ManageGrid = () => {
    const classes = useStyles();

    return(
        <div>
          <div className={classes.root}>
            <Grid alignItems="center" container spacing={6}>
              <Grid item>
                <NavLink className={classes.link} to="/manage">Manage</NavLink>
              </Grid>
              <Grid item>
                  <img width="100%" height="auto" src={ChatIcon} alt="chat-icon" />
              </Grid>
              <Grid item>
                  <img width="100%" height="auto" src={NotificationIcon} alt="notification-icon" />
              </Grid>
              <Grid item>
                  <img width="100%" height="auto" src={AvatarIcon} alt="avatar-icon" />
              </Grid>
            </Grid>
          </div>
        </div>
    )
}

export default ManageGrid;