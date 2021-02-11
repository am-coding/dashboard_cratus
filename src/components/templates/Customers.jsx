import React from 'react'
import Subscribers from '../molecules/Subscribers'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

//subscribers fake data
const subscribers = [
    {
        name: 'John Doe',
        email: 'john@gmail.com',
        date: '12/02/2020'
    },
    {
        name: 'Nick Sam',
        email: 'nicksam@gmail.com',
        date: '01/05/2019'
    },
    {
        name: 'Sasha Jain',
        email: 'sasha@gmail.com',
        date: '13/12/2020'
    },
    {
        name: 'Sam Doe',
        email: 'samn@gmail.com',
        date: '07/08/2020'
    },
    {
        name: 'Austin Post',
        email: 'postm@gmail.com',
        date: '15/09/2020'
    },
    {
        name: 'Faith Fraser',
        email: 'fath@gmail.com',
        date: '14/11/2020'
    },
    {
        name: 'Samik Ruth',
        email: 'samik@gmail.com',
        date: '09/06/2020'
    },
    {
        name: 'Jam Brad',
        email: 'jambrad@gmail.com',
        date: '02/04/2020'
    },
    {
        name: 'Jill Smith',
        email: 'jillsmith@gmail.com',
        date: '23/10/2020'
    },
    {
        name: 'Eren Jaeger',
        email: 'erenjaeger@gmail.com',
        date: '12/12/2019'
    },
    {
        name: 'Eve Jackson',
        email: 'jackson@gmail.com',
        date: '17/03/2020'
    },
    {
        name: 'Amy Oliver',
        email: 'amyoliver@gmail.com',
        date: '01/02/2020'
    },
    {
        name: 'Neil Churchhill',
        email: 'churchill@gmail.com',
        date: '01/02/2020'
    },
    {
        name: 'Richard Heindricks',
        email: 'richard@gmail.com',
        date: '01/02/2020'
    },
    {
        name: 'Dinesh Ramsay',
        email: 'dinesh@gmail.com',
        date: '01/02/2020'
    },
    {
        name: 'Gabe Told',
        email: 'gabe@gmail.com',
        date: '13/09/2020'
    },{
        name: 'Ian Ray',
        email: 'ianray@gmail.com',
        date: '17/05/2020'
    },
    {
        name: 'Gracy Mack',
        email: 'mackgracy@gmail.com',
        date: '11/10/2020'
    },
    {
        name: 'Ash Post',
        email: 'ashpost@gmail.com',
        date: '19/09/2019'
    },
     {
        name: 'John Doe',
        email: 'john@gmail.com',
        date: '12/02/2020'
    },
    {
        name: 'Nick Sam',
        email: 'nicksam@gmail.com',
        date: '01/05/2019'
    },
    {
        name: 'Sasha Jain',
        email: 'sasha@gmail.com',
        date: '13/12/2020'
    },
    {
        name: 'Sam Doe',
        email: 'samn@gmail.com',
        date: '07/08/2020'
    },
]

//new subscribers fake data
const newSubscribers = [
    {
        name: 'Sam Doe',
        email: 'samn@gmail.com',
        date: '07/08/2020'
    },
    {
        name: 'Austin Post',
        email: 'postm@gmail.com',
        date: '15/09/2020'
    },
    {
        name: 'Faith Fraser',
        email: 'fath@gmail.com',
        date: '14/11/2020'
    },
    {
        name: 'Samik Ruth',
        email: 'samik@gmail.com',
        date: '09/06/2020'
    },
    {
        name: 'Jam Brad',
        email: 'jambrad@gmail.com',
        date: '02/04/2020'
    },
    {
        name: 'Jill Smith',
        email: 'jillsmith@gmail.com',
        date: '23/10/2020'
    },
    {
        name: 'Eren Jaeger',
        email: 'erenjaeger@gmail.com',
        date: '12/12/2019'
    },
    {
        name: 'Eve Jackson',
        email: 'jackson@gmail.com',
        date: '17/03/2020'
    },
    {
        name: 'Amy Oliver',
        email: 'amyoliver@gmail.com',
        date: '01/02/2020'
    },
    {
        name: 'Neil Churchhill',
        email: 'churchill@gmail.com',
        date: '01/02/2020'
    },
    {
        name: 'Richard Heindricks',
        email: 'richard@gmail.com',
        date: '01/02/2020'
    },
]

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '90%',
      margin: '0 auto',
    },
  }));

//Customers page template
const Customers = () => {
    const classes= useStyles()

    return (
        <Grid spacing={6} className={classes.root} container>
            <Grid xs={6} item>
                <Subscribers 
                    title="Subscribers"
                    data={subscribers}
                />
            </Grid>
            <Grid xs={6} item>
                <Subscribers 
                    title="New Subscribers"
                    data={newSubscribers}
                />
            </Grid> 
        </Grid>
    )
}

export default Customers;
