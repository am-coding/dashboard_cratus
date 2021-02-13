import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import { Box, IconButton, Typography } from '@material-ui/core'; 
import rightArrow from '../../assets/right-arrow.png';
import leftArrow from '../../assets/left-arrow.png';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%'
    },
     button: {
        padding: '0.35rem',
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: theme.typography.subtitle1.fontSize,
        fontWeight: theme.typography.fontWeightBold
    },
    buttonContainer: {
        marginRight: '4rem'
    },
    tableHeading: {
        "& td": {
            color: theme.palette.secondary.main,
            fontSize: theme.typography.caption.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            padding: '0.7rem 0 0.7rem 0',
            [theme.breakpoints.up('xl')]: {
                fontSize: theme.typography.h5.fontSize,
            },
        },
    },
    tableData: {
        "& td": {
            color: theme.palette.secondary.main,
            fontSize: theme.typography.caption.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            [theme.breakpoints.up('xl')]: {
                fontSize: theme.typography.h6.fontSize,
            },
        }
    }
  }));

//Table component
const Table = ({subscribers, title}) => {
    const classes = useStyles()

    return (
            <table className={classes.root}>
            <tr>
                <td>
                    <Typography className={classes.title}>{title}</Typography>
                </td>
                <td></td>
                <td>
                    <Box className={classes.buttonContainer}>
                        <IconButton className={classes.button}><img width="100%" height="auto" src={leftArrow} alt="left-arrow-icon" /></IconButton>
                        <IconButton className={classes.button}><img width="100%" height="auto" src={rightArrow} alt="right-arrow-icon" /></IconButton>
                    </Box>
                </td>
            </tr>
            <tr className={classes.tableHeading}>
                <td>Name</td>
                <td>Email</td>
                <td>Date Subscribed</td>
            </tr>
            {subscribers.map((data) => {
                return(
                    <tr className={classes.tableData}>
                        <td>{data.name}</td>
                        <td>{data.email}</td> 
                        <td>{data.date}</td>
                    </tr>
                )
            })}
            </table>
    )
}

export default Table;
