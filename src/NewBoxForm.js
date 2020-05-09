import React from 'react'
class NewBoxForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            height:"",
            width:"",
            color:""
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.submit(this.state.height,this.state.width,this.state.color);
        this.setState({height:"",width:"",color:""});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height</label>
                <input 
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor="width">Width</label>
                <input 
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor="color">Color</label>
                <input 
                    id="color"
                    name="color"
                    value={this.state.color}
                    onChange={this.handleChange}
                />
                <button>Add a new box</button>
            </form>
        )
    }
}
export default NewBoxForm;