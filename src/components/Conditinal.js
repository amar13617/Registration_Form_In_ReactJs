import React, {useState} from 'react';


function Conditinal()

{

    const [loggedIn, setLoggedIn] = useState(true)
    
    if(loggedIn)
    {
        return (
            <div>
                <h1>Welcome Amar</h1>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <h1>Profile Guest</h1>
            </div>
        )
    }

    
}

export default Conditinal;