import React from 'react'


class Cell extends React.Component {
    // constructor(props){
    //     super()
    //     this.state = {
    //         color: props.color
    //     }
    // }
    state= {
    color: this.props.value
    }

    handlerClick =() => {
        let valy = '#333'
        this.setState({color: valy})  
    }
    render(){

        console.log(this.props)
       return( 
       <div className = "cell" onClick={this.handlerClick} style= {{backgroundColor: this.state.color}}></div>
       )
    }
}

export default Cell;