import React, { Component } from 'react';
import api from '../../utils/apicaller'



    

class dropdown2 extends Component {
    constructor(props){
    super(props);
    this.state = {
        Units : [],
        value: '',
        name:''
    };
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.setState({name:event.target.name});
    }
        
    componentDidMount() {
        api('api/DonViTinh', 'GET', null).then(res => {
            this.setState({Units: res.data})
        });
    }
    
    render(){
        return (
            <div>
                <select onChange={(event)=>{console.log(event); event.target.name=this.props.name;this.handleChange(event); this.props.onChange(event)}}>
                    {this.state.Units.map((unit,index) => <option key={index} name={this.props.name} value={unit.DonVi_ID}>{unit.TenDonVi}</option>)}
                </select>
            </div>
        );
    }
}
export default dropdown2;