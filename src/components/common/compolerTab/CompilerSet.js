import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import FirebaseTabs from './compilerTab';
import Chubby from '../chubbyButton'

  const Demo = (props) => {
    const [index, setIndex] = React.useState(0);
    const syntax = ["JavaScript","C_Cpp","Python","Java","Ruby"]

    const handleChange = (event, newValue) => {
        setIndex(newValue);
        console.log(newValue)
        props.sendMode(syntax[newValue].toLowerCase())
    };

    return (
      <AppBar position={'static'}>
        <FirebaseTabs
          tabs={[
            { label: 'JavaScript' },
            { label: 'C_Cpp' },
            { label: 'Python' },
            { label: 'Java' },
            { label: 'Ruby' },
          ]}
          value={index}
          onChange={handleChange}
        />
      </AppBar>
    );
  }
  
  export default Demo;