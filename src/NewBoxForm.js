import React from 'react'
import {v4} from 'uuid'
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
        const newBox={...this.state,id:v4()}
        this.props.submit(newBox);
        this.setState({height:"",width:"",color:""});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        type="text"
                        id="height"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input
                        type="text"
                        id="width"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input 
                        type="text"
                        id="color"
                        name="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </div>
                <button>Add a new box</button>
            </form>
        )
    }
}
export default NewBoxForm;
