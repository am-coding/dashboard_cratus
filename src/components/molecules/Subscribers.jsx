import React from 'react'
import Table from '../atoms/Table'
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {
      padding: '2rem',
      borderRadius: '15px',
      height: '100%'
    },
  }));

//Subscribers table components to display subcscribers/new subscribers
const Subscribers = ({title, data}) => {
    const classes= useStyles()

    return (
        <Paper className={classes.root}>
            <Table 
                subscribers={data}
                title={title}
             />
        </Paper>
    )
}

export default Subscribers;
