import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
  
const useTabsStyles = makeStyles( theme => ({
  root: {
    marginLeft: '8px',
  },
  indicator: {
    height: 4,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: 'white',
  },
}));
  
const useTabStyles = makeStyles(theme => ({
  root: {
    textTransform: 'initial',
    margin: '8px',
    minWidth: 0,
    font: 'caption'
  },
  wrapper: {
    fontWeight: 'bold',
    fontFamily: 'cursive',
    letterSpacing: 0.5,
  },
}));
  
  const FirebaseTabs = ({ tabs, tabProps, ...props }) => {
    const tabsClasses = useTabsStyles(props);
    const tabClasses = useTabStyles(tabProps);
    return (
      <Tabs {...props} classes={tabsClasses}>
        {tabs.map(tab => (
          <Tab key={tab.label} {...tab} classes={tabClasses} />
        ))}
      </Tabs>
    );
  };
  
  FirebaseTabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
      }),
    ),
    tabProps: PropTypes.shape({}),
  };
  FirebaseTabs.defaultProps = {
  tabs: [],
  tabProps: {},
};
  
export default FirebaseTabs;
