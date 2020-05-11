import React from 'react'
class Box extends React.Component{
    render(){
        return(
            <div>
                <div style={{
                    backgroundColor:this.props.color,
                    height:`${this.props.height}em`,
                    width:`${this.props.width}em`
                }}>
                </div>
                <button onClick={this.props.removeBox}>Remove Box</button>
            </div>
        )
    }
}
export default Box;
