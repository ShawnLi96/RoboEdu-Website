import React from 'react';

export default class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            ID: "",
            Name: ""

        }
    }

    onChange = (e, prop) => {
        const {prop, value} = e.target;
        this.setState({
            prop: value
        })
    }
    render(){
        return (
            <div>
                <label>家长微信 WeChat ID</label>
                <input
                    type="text"
                    required
                    value={this.state.ID}
                    onChange = {this.onChange(e, prop)}
                    autofocus
                    />

            </div>
        );
        
    }
    

}
