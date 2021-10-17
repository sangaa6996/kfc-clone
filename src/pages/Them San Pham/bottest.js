import React, { Component } from 'react'
import api from '../../utils/apicaller';

class Bot extends Component {

  constructor(props){
    super(props);
    this.state = {
      Bot: ''
    };
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }
  
  onSave = (e) => {
    e.preventDefault();
    var {User} = this.state;
    api('api/bot', 'POST', {
      user_input: User,
    }).then( res => {
      console.log(res.data); 
    });
  }

  render() {
    var {User} = this.state;
    return (
      <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit = {this.onSave}>
            <div className="form-group">
                <label>User: </label>
                <input type="text" class="form-control" name = 'User' value = {User}
                onChange = {this.onChange}/>
            </div>
            <label></label>
            <button type="submit" class="btn btn-primary">Lưu Lại</button>
        </form>
      </div>
    );
  }
}

export default Bot;