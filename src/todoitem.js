import React from 'react';

class Todoitem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.delete(this.props.index)
    }
    render(){
        return(
            <div onClick={this.handleClick}>{this.props.content}</div>
        );
    }
}

export default Todoitem;