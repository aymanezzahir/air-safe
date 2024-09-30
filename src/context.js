import React from 'react';


export const IsLoggined = React.createContext(null);


export default function IsLoggin({children} ){
    let [islogin , setisloggin] = React.useState(false);
    let objectLog = {islogin , setisloggin};
    return (
        <IsLoggined.Provider value={objectLog} >
            {children}
        </IsLoggined.Provider>
    )
}