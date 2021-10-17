import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap'
import api from '../../utils/apicaller';



    

class DangKi extends Component {

    constructor(props){
    super(props);
        this.state = {
            txtHoTen : '',
            txtUserName : '',
            txtPassword : '',
            txtEmail : '',
            txtSDT : '',
            txtDiaChiNha : '',
            txtPhuong : '',
            txtQuan : '',
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
        var {txtHoTen, txtUserName, txtPassword, txtEmail, txtSDT, txtDiaChiNha, txtPhuong, txtQuan} = this.state;
        console.log(this.state);
        api('api/Dangki', 'POST', {
            HoTen : txtHoTen,
            SDTKH : txtSDT,
            Email : txtEmail,
            UserName : txtUserName,
            PassWord : txtPassword,
            DiaChi : txtDiaChiNha + txtPhuong + txtQuan,
        }).then( res => {
            console.log(res);
        });
  }

    render(){
        var {txtHoTen, txtUserName, txtPassword, txtEmail, txtSDT, txtDiaChiNha, txtPhuong, txtQuan} = this.state;
        return (
            <div className="container">
                <h1>Hãy là thành viên của KFC</h1>
            <Form onSubmit = {this.onSave}>
                <Form.Group>
                    <Form.Label>Họ Tên</Form.Label>
                    <Form.Control type="text" placeholder="DuongThienKhoi" name = "txtHoTen" value={txtHoTen} onChange = {this.onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="KhoiDepTraiTV" name = "txtUserName" value={txtUserName} onChange = {this.onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name = "txtPassword" value={txtPassword} onChange = {this.onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="thienkhoiduong@gmail.com" name = "txtEmail" value={txtEmail} onChange = {this.onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Số Điện Thoại</Form.Label>
                    <Form.Control type="text" placeholder="098306xxxx" name = "txtSDT" value={txtSDT} onChange = {this.onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Địa Chỉ Nhà</Form.Label>
                    <Form.Control type="text" placeholder="82/53/2 Định Bộ Lĩnh" name = "txtDiaChiNha" value={txtDiaChiNha} onChange = {this.onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phường</Form.Label>
                    <Form.Control type="text" placeholder="Phường 26" name = "txtPhuong" value={txtPhuong} onChange = {this.onChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quận</Form.Label>
                    <Form.Control as="select" name = "txtQuan" value={txtQuan} onChange = {this.onChange}>
                        <option value='Quận 1'>Quận 1</option>
                        <option value='Quận 2'>Quận 2</option>
                        <option value='Quận 3'>Quận 3</option>
                        <option value='Quận 4'>Quận 4</option>
                        <option value='Quận 5'>Quận 5</option>
                        <option value='Quận 6'>Quận 6</option>
                        <option value='Quận 7'>Quận 7</option>
                        <option value='Quận 8'>Quận 8</option>
                        <option value='Quận 9'>Quận 9</option>
                        <option value='Quận 10'>Quận 10</option>
                        <option value='Quận 11'>Quận 11</option>
                        <option value='Quận 12'>Quận 12</option>
                        <option value='Quận Thủ Đức'>Thủ Đức</option>
                        <option value='Quận Bình Tân'>Bình Tân</option>
                        <option value='Quận Tân Bình'>Tân Bình</option>
                        <option value='Quận Bình Chánh'>Bình Chánh</option>
                        <option value='Quận Nhà Bè'>Nhà Bè</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Đăng Kí
                </Button>
            </Form>
            </div>
        );
    }
}
export default DangKi;