import React, { Component } from 'react'
import axios from 'axios';

export default class Quotes extends Component {

state = {
    data:[]
}
    componentDidMount(){
        axios.get('/api/quotes').then(res=>this.setState({data:res.data}))
    }
    render() {
      
        return (
            <div>
                   {this.state.data && <p style={{textAlign:'center'}}>{this.state.data.map(i => i.quotes)}</p>}
            </div>
        )
    }
}
