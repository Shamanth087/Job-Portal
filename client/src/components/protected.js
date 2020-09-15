import React from 'react'

import {Route,Redirect} from 'react-router-dom'


const ProtectedRouter = ({component,...rest})=> {
    let RenderComponents = component;
   
    
    return (
        <Route
            {...rest}
            render = {

                props => {
                 return   true ? (
                 <RenderComponents  {...props} />
                    ) : (
                        <Redirect
                        to = {{
                            pathname:'/'
                        }}
                        />

                    )

                 }
            }
       />
    )
}

export default ProtectedRouter;