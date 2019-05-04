import React from 'react';
import Todoitem from './todoitem';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:['1','2'],
            inputValue:''
        }
        this.handleClick=this.handleClick.bind(this);
        this.handleChang=this.handleChang.bind(this);
        this.handleItemClick=this.handleItemClick.bind(this);
    }
    handleClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }
    handleChang(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    handleItemClick(index){
        //需要操作state中数据的时候，一般不直接操作，而是重新复制一个出来，操作完成后再赋值给state
        const list=this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    render(){
        return(
            <React.Fragment>
                <input type="text" value={this.state.inputValue} onChange={this.handleChang}></input>
                <button onClick={this.handleClick}>添加</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            // return <li onClick={this.handleItemClick.bind(this,index)} key={index}>{item}</li>

                            //组件传递参数：
                            // 1:父组件通过属性方式，传值给子组件。子组件通过this.props.属性名获取参数
                            // 2:子组件通过属性关联方法的方式与父组件通信
                            return <Todoitem delete={this.handleItemClick} content={item} key={index} index={index}></Todoitem>
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default TodoList;