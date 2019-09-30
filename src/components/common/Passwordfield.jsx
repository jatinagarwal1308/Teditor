import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/VisibilitySharp';
import VisibilityOff from '@material-ui/icons/VisibilityOffSharp';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function OutlinedInputAdornments({onChangePass, onChangeError}) {
  const classes = useStyles();
  const [showPassword, setValues] = React.useState(false);

  const handleClickShowPassword = () => {  console.log(onChangeError)
    setValues(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
      <TextField
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        error={onChangeError}
        type={showPassword ? 'text' : 'password'}
        label="Password"
        onChange={onChangePass}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
  );
}