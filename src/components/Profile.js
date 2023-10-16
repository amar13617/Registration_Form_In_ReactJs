import React from 'react'

export default class Profile extends React.Component 
{
    constructor() {
        super();
        this.state = {
            name: 'peter',
            email: 'peter@gmail.com'
        }

    }
    updateState()
    {
        this.setState({
            name: 'Amar'
        })
        
    }
  render ()
  {
    return(
    <div>
        <h1>Hello {this.state.name}</h1>
        <h1>Hello {this.state.email}</h1>
        <button onClick={()=>{this.updateState()}}>Update Name</button>
    </div>
  )
}

}