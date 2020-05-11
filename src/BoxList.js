import React from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm';
class BoxList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            boxes:[
                // {height:40,width:10,color:"purple"}
            ]
        }
    }
    remove=(id)=>{
        this.setState({
            boxes:this.state.boxes.filter(box=>box.id!==id)
        })
    }
    submit=(newBox)=>{
        this.setState({
            boxes:[...this.state.boxes, newBox]
        });
    }
    render(){
        const boxes=this.state.boxes.map(box=>(<Box 
            id={box.id} 
            key={box.id} 
            width={box.width} 
            height={box.height} 
            color={box.color} 
            removeBox={()=>this.remove(box.id)}/>))
        return(
            <div>
                <h1>Color Box Maker</h1>
                <NewBoxForm submit={this.submit}/>
                {boxes}
            </div>
        )
    }
}
export default BoxList;
