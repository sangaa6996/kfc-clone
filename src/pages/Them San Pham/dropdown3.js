import React, { Component } from 'react';
import api from '../../utils/apicaller'



    

class dropdown3 extends Component {
    constructor(props){
    super(props);
    this.state = {
        KhuyenMais : [],
        value: '',
        name:''
    };
    }

        
    componentDidMount() {
        api('api/KhuyenMai', 'GET', null).then(res => {
            this.setState({KhuyenMais: res.data})
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
                    {this.state.KhuyenMais.map((KhuyenMai,index) => <option key={index} name={this.props.name} value={KhuyenMai.KhuyenMai_ID}>{KhuyenMai.TenKhuyenMai}</option>)}
                </select>
            </div>
        );
    }
}
export default dropdown3;