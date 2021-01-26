import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {
  NavLink
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   button: {
       color:  theme.palette.secondary.main,
       width: '86%',
       height: '3rem',
       textTransform: 'capitalize',
       borderRadius: '10px',
       padding: '1rem',
       marginLeft: '1rem',
       paddingLeft: '1.5rem', 
       justifyContent: "flex-start",
       fontSize: theme.typography.caption.fontSize,
       fontWeight: '500',
       '&:hover': {
           backgroundColor: theme.palette.primary.main,
           color:  theme.palette.white.main,
           '& $image': {
            filter: 'brightness(0) invert(1)',
           }
   },
   '&.active': {
        backgroundColor: theme.palette.primary.main,
        color:  theme.palette.white.main,
        '& $image': {
          filter: 'brightness(0) invert(1)',
         }
   }
},
image: {
    filter: 'invert(1)',
},
activeLink: {
  color: 'red'
}
  }));

//Navigation Sidebar Button
const NavButton = ({title, icon, link}) => {
    const classes = useStyles();
    return (
        <Button exact component={NavLink} to={{pathname: `${link}`}} className={classes.button} startIcon={<img src={icon} className={classes.image} alt="icon" width="16px" />}>{title}</Button>
    );
  }

export default NavButton;
