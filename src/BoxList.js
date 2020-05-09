import React from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm';
class BoxList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            height:"",
            width:"",
            color:""
        }
    }
    submit=(height1,width1,color1)=>{
        // alert(height+" "+width+" "+color);
        this.setState(st=>(
            {
                height:height1,
                width:width1,
                color:color1
            }
        ));
    }
    render(){
        return(
            <div>
                <NewBoxForm submit={this.submit}/>
                <Box height={this.state.height} width={this.state.width} color={this.state.color}/>
            </div>
        )
    }
}
export default BoxList;