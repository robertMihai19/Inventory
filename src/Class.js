import React from "react";

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        };
    }

    clickedButton() {
        this.setState({count:this.state.count+1});
    }

    render(){
        return(
            <div>
                <p>Clicked: {this.state.count}</p>
                <button className="btn btn-secondary" onClick={()=> this.clickedButton()}>Click me</button>
            </div>
        );
    }
}
export default Test;