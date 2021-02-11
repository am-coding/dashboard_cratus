import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%'
    },
    tableHeading: {
        "& td": {
            color: theme.palette.secondary.main,
            fontSize: theme.typography.caption.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
            padding: '0.7rem 0 0.7rem 0'
        }
    },
    tableData: {
        "& td": {
            color: theme.palette.secondary.main,
            fontSize: theme.typography.caption.fontSize,
            fontWeight: theme.typography.fontWeightMedium,
        }
    }
  }));

//Table component
const Table = ({subscribers}) => {
    const classes = useStyles()

    return (
            <table className={classes.root}>
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
