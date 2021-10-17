import React, { Component } from 'react';
import SP from '../../components/SanPham/SanPham';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import api from '../../utils/apicaller'
import { HienThiSanPham } from '../../actions';
import { connect } from 'react-redux';


class Homepage extends Component {


  constructor(props){
      super(props);
      this.state = {
          sanphams : []
      };
  }

    componentDidMount() {
      api('api/Mon/LayCategory/ComBo1Nguoi', 'GET', null).then(res => {
          this.props.laytatcaSanPham(res.data)
      });
  }
  render(){
    var {sanphams} = this.props;
    return (
        <div className="Homepage">
              <div className="container">
                  <div className="row">
                      <div className="col-2 col-left">
                          Tất Cả
                      </div>
                      <div className="col-10 col-san-pham">
                          <div className="post-title-pc row">
                              <span>ComBo Một Người</span>
                          </div>
                          <div className="row">
                              {this.showSanPhams(sanphams)}
                          </div>
                      </div>
                  </div>               
              </div>
          </div>
    );
  }
  showSanPhams(sanphams) {
      var result = null;
      if(sanphams.length > 0){
          result = sanphams.map((sanpham, index) => {
              return(
                <SP 
                    key = {index}
                    sanpham = {sanpham}
                    index = {index}/>
              )
          });
      }
      return result;
  }
}

const mapStateToProps = state => {
    return {
        sanphams : state.sanphams
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        laytatcaSanPham : (sanphams) => {
            dispatch(HienThiSanPham(sanphams))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);;
