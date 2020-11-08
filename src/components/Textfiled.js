import React, { Component } from 'react'

 class Textfiled extends Component {
    state = {

        userInput:" "
    }
   inputChangeHandler=(event)=>{
        this.setState({userInput:event.target.value });
    }

    render() {


        return (
            <div>
                <input type="text" onChange={this.inputChangeHandler}
                value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}
export default Textfiled;

