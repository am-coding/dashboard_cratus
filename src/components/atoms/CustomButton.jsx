import React from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '16px',
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        textTransform: 'capitalize',
        boxShadow: 'none',
        padding: '16px 43px',
    }
}));

const CustomButton = ({title}) => { 
    const classes = useStyles()
    return <Button variant="contained" color="primary" className={classes.root}>{title}</Button>
}

export default CustomButton;
