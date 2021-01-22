import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
   button: {
       color:  '#808191',
       width: '86%',
       height: '3rem',
       textTransform: 'capitalize',
       borderRadius: '10px',
       padding: '1rem',
       marginLeft: '1rem',
       paddingLeft: '1.5rem', 
       justifyContent: "flex-start",
       fontSize: '0.7rem',
       fontWeight: '500',
       '&:hover': {
           backgroundColor: '#B9181E',
           color:  '#fff',
           '& $image': {
            filter: 'brightness(0) invert(1)',
           }
   },
},
image: {
    filter: 'invert(1)',
}
  }));
  
const NavButton = ({title, icon}) => {
    const classes = useStyles();
    return (
        <Button className={classes.button} startIcon={<img src={icon} className={classes.image} alt="icon" width="16px" />}>{title}</Button>
    );
  }

export default NavButton;
