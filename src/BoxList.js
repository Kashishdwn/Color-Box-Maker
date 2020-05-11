import React from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm';
class BoxList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            boxes:[
                {height:40,width:10,color:"purple"}
            ]
        }
    }
    submit=(newBox)=>{
        // alert(height+" "+width+" "+color);
        this.setState({
            boxes:[...this.state.boxes, newBox]
        });
    }
    render(){
        const boxes=this.state.boxes.map(box=>(<Box width={box.width} height={box.height} color={box.color}/>))
        return(
            <div>
                <NewBoxForm submit={this.submit}/>
                {boxes}
            </div>
        )
    }
}
export default BoxList;
