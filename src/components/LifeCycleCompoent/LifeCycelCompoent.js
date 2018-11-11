import React, { Component } from 'react';


class LifeCyccleCompoent extends Component {
    constructor(){
          super();
          console.log("Constructor")
    }
    componentDidMount()
    {
        console.log("componentDidMount");
        this.Name = "Arek";
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    
    render() {
        console.log("Render");
        return(
            <p> soemka</p>
        );
    }

}
export default LifeCyccleCompoent;