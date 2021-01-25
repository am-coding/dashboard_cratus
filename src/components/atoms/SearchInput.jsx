import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '../../assets/Search.png';

const useStyles = makeStyles(() => ({
  div: {
   display: 'grid',
   gridTemplateColumns: 'auto auto',
   columnGap: '0.5rem'
  },
  input: {
   fontSize: '0.9rem',
  }
}));

 function InputWithIcon() {
  const classes = useStyles();

  return (
      <div className={classes.div}>
          <img src={SearchIcon} alt="search-icon" />
        <Input disableUnderline="true" className={classes.input} placeholder="Everything" />
      </div>
  );
}

export default InputWithIcon;