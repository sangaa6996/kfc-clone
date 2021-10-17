import React, { Component } from 'react';
import api from '../../utils/apicaller'



    

class dropdown extends Component {
    constructor(props){
    super(props);
    this.state = {
      categorys : [],
      value: '',
      name:''
    };
    this.handleChange = this.handleChange.bind(this);
    }

        
    componentDidMount() {
        api('api/LoaiHang', 'GET', null).then(res => {
            this.setState({categorys: res.data})
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.setState({name:event.target.name});
    }
    
    

    render(){
        const categories = this.state.categorys;

        return (
            <div>  
                <select onChange={(event)=>{console.log(event); event.target.name=this.props.name;this.handleChange(event); this.props.onChange(event)}}>
                    {categories.map((category,index) => 
                    <option  
                    key={index} 
                    name={this.props.name}
                    value={category.Loai_ID}
                    >
                    {category.TenLoai}
                    </option>)}
                </select>
            </div>
            
        );
    }
}
export default dropdown;