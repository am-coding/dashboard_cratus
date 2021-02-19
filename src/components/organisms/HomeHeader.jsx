import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Img from '../../assets/img.png'
import HeaderBox from '../molecules/HeaderBox';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${Img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        width: '100%',
        height: '50vh',
    },
}));

const HomeHeader = () => {
    const classes = useStyles();

    return (
        <header className={classes.root}>
            <HeaderBox/>
        </header>
    )
}

export default HomeHeader;
