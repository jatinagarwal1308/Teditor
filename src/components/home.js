import React , { Fragment, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {database} from '../containers/fire'
import Navbar from './common/navbar'
import CompilerBar from './common/compilerBar'
import brace from 'brace';
import 'brace/theme/monokai';
import 'brace/mode/javascript';
import 'brace/mode/c_cpp';
import AceEditor from 'react-ace';
import { Loginstate } from '../Provider'

const useStyles = makeStyles(theme => ({
root : {
  display: 'flex'
},
  toolbar: {
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
  },
  editor: {
  marginLeft: theme.spacing(3),
  marginTop : theme.spacing(3),   
  }
}));

export default function Home(props){
  const classes = useStyles();
  const [docId,setdocId] = React.useState(null)
  const [preText,setpreText] = React.useState('')
  const [Mode,setMode] = React.useState("javascript")
  const { userAuthentication } = useContext(Loginstate)


useEffect(() =>{
 // console.log(props.history) 
  if(userAuthentication.loggedin){
           
    database.collection('personalDetails').get()
     .then(snapshot => {
        snapshot.forEach(doc => {  
          if(doc.data().Username === userAuthentication.user){ 
              setdocId(doc.id)
              setpreText(doc.data().text)
          }                   
        });
        return;        
      })  
  }
})

  function onChange(newText) {
    if(userAuthentication.loggedin){
      database.collection('personalDetails').doc(docId).update({ text : newText })
    }  
    else{
      setpreText(newText)
    }
   }

  function getMode(mode) {
    setMode(mode.toLowerCase())
  }

   return(
	<Fragment>

    <div className={classes.root}>
      <Navbar match={ props.match.path }/>

    <main className={classes.content}>
    <div className={classes.toolbar} />
    <CompilerBar/>
      <AceEditor
        className={classes.editor}
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={preText}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          }}/>
    
    </main>
    </div>

    </Fragment>
    );

}
