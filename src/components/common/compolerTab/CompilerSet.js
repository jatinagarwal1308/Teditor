
  import React from 'react';
  import AppBar from '@material-ui/core/AppBar';
  import FirebaseTabs from './compilerTab';
  import Chubby from '../chubbyButton'

  const Demo = (props) => {
    const [index, setIndex] = React.useState(0);
    const syntax = ["JavaScript","Java","Cpp","Python","Ruby"]

    const handleChange = (event, newValue) => {
       // console.log(newValue)
        setIndex(newValue);
        props.sendMode(index)
    };

    return (
      <AppBar position={'static'}>
        <FirebaseTabs
          tabs={[
            { label: 'JavaScript' },
            { label: 'Cpp' },
            { label: 'Python' },
            { label: 'Java' },
          ]}
          value={index}
          onChange={handleChange}
        />
      </AppBar>
    );
  }
  
  export default Demo;