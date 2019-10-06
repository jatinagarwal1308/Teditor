import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, shadows }) => ({
  root: ({ chubby }) => ({
    minWidth: 180,
    padding: '9px 5px',
    borderRadius: 50,
    margin: '12px',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:
      'linear-gradient(to right, #32CD32, #008B8B)',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    ...(chubby && {
      borderRadius: 50,
    }),
  }),
  label: {
    color: 'white',
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,

  },
  contained: {
    minHeight: 30,
    boxShadow: 'yellow',
    '&:active': {
      boxShadow: 'yellow',
    },
  },
}));

const GradientButton = ({ chubby, ...props }) => {
  const classes = useStyles({ chubby, ...props });
  return <Button {...props} classes={classes} />;
};

GradientButton.propTypes = {
  chubby: PropTypes.bool,
};
GradientButton.defaultProps = {
  chubby: false,
};

export default GradientButton;
