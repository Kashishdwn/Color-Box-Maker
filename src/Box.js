import React from 'react'
class Box extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:this.props.color,height:this.props.height,width:this.props.width}}>
            </div>
        )
    }
}
export default Box;