import React, { Component } from 'react'
import api from '../../utils/apicaller';
import axios from 'axios';
import {Form,Button} from 'react-bootstrap'
import Dropdown from './dropdown';
import Dropdown1 from './dropdown1';
import Dropdown2 from './dropdown2';
import Dropdown3 from './dropdown3';

class ThemSP extends Component {

  constructor(props){
    super(props);
    this.state = {
      txtTenMon : '',
      txtLoai : '',
      txtAnh : '',
      txtDonGia : '',
      txtSize : '',
      txtDonVi : '',
      txtMoTa : '',
      txtKhuyenMai : '',

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
    var {txtTenMon, txtMoTa, txtDonGia, txtAnh, txtSize, txtDonVi, txtKhuyenMai, txtLoai} = this.state;
    console.log(this.state);
    api('api/Mon', 'POST', {
      Mon_Name : txtTenMon,
      Cate_ID : txtLoai,
      MoTa : txtMoTa,
      Size_ID : txtSize,
      DonGia : txtDonGia,
      Unit_ID : txtDonVi,
      KhuyenMai_ID : txtKhuyenMai,
      Mon_Image : txtAnh,
    }).then( res => {
      console.log(res);
    });
  }


  render() {
    var {txtTenMon, txtMoTa, txtDonGia, txtAnh, txtSize, txtDonVi, txtKhuyenMai, txtLoai} = this.state;
    return (
      <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <Form onSubmit = {this.onSave}>
          <Form.Group>
            <Form.Label>Tên món</Form.Label>
            <Form.Control type="text" placeholder="M01.." name = "txtTenMon" value = {txtTenMon} onChange = {this.onChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô Tả</Form.Label>
            <Form.Control type="text" placeholder="Cánh gà chiên..." name = "txtMoTa" value = {txtMoTa} onChange = {this.onChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Chọn Loai</Form.Label>
            <Dropdown  name = "txtLoai"  value={txtLoai} onChange = {this.onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Chọn size</Form.Label>
            <Dropdown1 name = "txtSize"  value={txtSize} onChange = {this.onChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Đơn vị tính</Form.Label>
            <Dropdown2 name = "txtDonVi" value={txtDonVi} onChange = {this.onChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Đơn Giá</Form.Label>
            <Form.Control type="text" placeholder="32000" name = "txtDonGia" value = {txtDonGia} onChange = {this.onChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Chọn KhuyếnMãi</Form.Label>
            <Dropdown3 name = "txtKhuyenMai" value={txtKhuyenMai} onChange = {this.onChange}/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Nhập ảnh món"  name = "txtAnh" value = {txtAnh} onChange = {this.onChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Thêm món
          </Button>
        </Form>
      </div>
    );
  }
}

export default ThemSP;