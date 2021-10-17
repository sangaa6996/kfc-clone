import React, { Component } from 'react';
import api from '../../utils/apicaller'


    

class dropdown1 extends Component {
    constructor(props){
    super(props);
    this.state = {
        Sizes : [],
        value: '',
        name:''
    };
    this.handleChange = this.handleChange.bind(this);
    }
      
    componentDidMount() {
        api('api/Size', 'GET', null).then(res => {
            this.setState({Sizes: res.data})
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.setState({name:event.target.name});
    }
    
    render(){
        return (
            <div>
                <select onChange={(event)=>{console.log(event); event.target.name=this.props.name;this.handleChange(event); this.props.onChange(event)}}>
                    {this.state.Sizes.map((size,index) => <option key={index} name={this.props.name} value={size.Size_ID}>{size.TenSize}</option>)}
                </select>
            </div>
        );
    }
}
export default dropdown1;