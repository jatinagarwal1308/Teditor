import React, { useState } from 'react'
export const Loginstate = React.createContext()

const LoginstateProvider = (props) =>{ 
  
  const [userAuthentication, setuserAuthentication] = useState({ 
    loggedin : false,
    user : "none",
  })
   
 const togglestate = (user) => {
    setuserAuthentication({ loggedin: !userAuthentication.loggedin,
                            user: user
    })
  }
    return <Loginstate.Provider value={{userAuthentication, togglestate: togglestate}}>
             {props.children}
           </Loginstate.Provider>
  
}

export default LoginstateProvider