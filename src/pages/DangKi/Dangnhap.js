import React, { useEffect, useState } from 'react';
import {Form,Button} from 'react-bootstrap'
import {Redirect,useLocation, Link} from 'react-router-dom';
import { SyntheticEvent } from 'react';
import axios from 'axios';

const Dangnhap = (props) => {
  
    const [UserName, setUserName] = useState('');
    const [PassWord, setPassWord] = useState('');
    const [redirect, setRedirect] = useState(false);
    let location=useLocation();
  
    const submit = (e= SyntheticEvent) => {
        e.preventDefault();
        axios.post('https://localhost:5001/api/Dangnhap', {
              UserName : UserName,
              Password : PassWord
          },
          {
              withCredentials: true,
              headers: {'Content-Type': 'application/json'
          }}).then(function (response) {
              const content = response.data
              location.state.setName()
          })
          .catch(function (error) {
              console.log(error);
          });
          
        setRedirect(true);
    }
    
    if(redirect){
      return <Redirect to="/"/>
    }
      return (
        <Form onSubmit = {submit}>
            <Form.Group>
                <Form.Label>UserName</Form.Label>
                <Form.Control type="text" placeholder="KhoiDepTraiTV" required onChange={e => setUserName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"required onChange={e => setPassWord(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Đăng Nhập
            </Button>
            <Link to="Dangki">Đăng Kí</Link>
        </Form>
      );
  };
export default Dangnhap;