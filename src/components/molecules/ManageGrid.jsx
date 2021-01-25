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
    }, 
    link: {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    }
  }));

const ManageGrid = () => {
    const classes = useStyles();

    return(
        <div>
<div className={classes.root}>
      <Grid alignItems="center" container spacing={5}>
        <Grid item>
           <NavLink className={classes.link} to="/manage">Manage</NavLink>
        </Grid>
        <Grid item>
            <img src={ChatIcon} alt="chat-icon" />
        </Grid>
        <Grid item>
            <img src={NotificationIcon} alt="notification-icon" />
        </Grid>
        <Grid item>
            <img src={AvatarIcon} alt="avatar-icon" />
        </Grid>
      </Grid>
    </div>
        </div>
    )
}

export default ManageGrid;