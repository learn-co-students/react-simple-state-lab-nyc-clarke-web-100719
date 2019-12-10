import React from 'react'

export default class Cell extends React.Component {

    state = {
        color: this.props.value
    }

    changeColor=()=>{
        let newColor = '#333'
        this.setState({color: newColor})
    }

    render(){
        console.log(this.state)
    return (
    <div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}>test</div>
        )
    }

}

