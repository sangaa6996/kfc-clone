import React, { Component, useEffect } from 'react';
import OD from '../Order/order';
import { CartContext } from './CartProvider';
import api from '../../utils/apicaller'
import ReactDOM from "react-dom"
import {Button} from 'react-bootstrap'
import { HashRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import DienThongTin from '../../pages/DangKi/DienThongTin'
import axios from 'axios'
import ThanhToanButton from '../Cart/ThanhToanButton';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

class Cart extends Component {
    constructor(props){
        super(props) 
        this.state={
            DonHangs:[],
            DONHANG_ID:null,
            TongTien:0,
            KhuyenMai:0,
            Vouhchers:[],
            Voucher_ID_User:null,
            Voucher:{
                Voucher_ID:null,
                PhanTramKhuyenMai:0,
            },
            NhanVien_ID:1,
        }
    }
    
    myString(data){
        if (data===null) {
            return 'NULL';
        }
        else{
            return "'"+data+"'";
        }
    }
    
    componentDidMount() {
        api('api/DonHang', 'GET', null).then(res => {
            this.setState({DonHangs: res.data})
            // const DonHangs = this.state.DonHangs;
            // var SoLuong=Number(DonHangs[DonHangs.length-1].DonHang_ID.substring(3,4))
            // var aa=String(SoLuong+1)
            // const DH_ID=this.state.DonHangs[this.state.DonHangs.length-1].DonHang_ID.substring(0,3)+aa
            
            var today = new Date();
            var n= today.toLocaleString("en-US",{timeZone:"Asia/Jakarta"});

            var time = today.getTime();
            var date = today.getDate();
            var month = today.getMonth()+1;
            var years = today.getFullYear();
            var hours=today.getHours();
            var minutes = today.getMinutes();
            var seconds = today.getSeconds();
            var milliseconds = today.getMilliseconds();
            
            
            const DH_ID=date+""+month+""+years+"-"+hours+""+minutes+""+seconds+""+milliseconds;
            console.log(DH_ID);
            this.setState({DONHANG_ID:DH_ID})
        });
        api('api/Voucher', 'GET', null).then(res => {
            this.setState({Vouhchers: res.data})
        });
        axios.get('https://localhost:5001/api/user',{
        withCredentials: true,
        headers: {'Content-Type':'application/json'}})
        .then(response=>{
            if(response.data!==null){
            this.props.setUser({User:response.data})
            }
        })
    }
    render(){
        async function addCTDH(cart){
            await fetch("https://localhost:5001/api/CTDONHANG",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(cart)
            })
            .then(res=>res.json())
            .then((result=>
                {
                    alert("Thanks for paying");
                }),(error)=>{
                    alert(error);
            })
        }    
        const addDonHang=async (TrangThai)=>{
            const DonHangs = this.state.DonHangs;
            // var SoLuong=Number(DonHangs[DonHangs.length-1].DonHang_ID.substring(3,4))
            // var aa=String(SoLuong+1)
            // const DH_ID=this.state.DonHangs[this.state.DonHangs.length-1].DonHang_ID.substring(0,3)+aa
            console.log(this.state.DONHANG_ID)
            const NV_ID=this.state.NhanVien_ID
            const VOUCHER=this.state.Voucher.Voucher_ID
            await fetch("https://localhost:5001/api/DONHANG",{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({DonHang_ID:this.state.DONHANG_ID,DaThanhToan:TrangThai,NhanVien_ID:'1',ThoiGianDat:new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"}),Voucher_ID:this.myString(VOUCHER),})
            })
            .then(res=>res.json())
            .then((result=>
                {console.log(result);
                }),(error)=>{
                    console.log(error);
            })
        }
        const createOrder=(data, actions)=>{
            var convertToUSD=(this.state.TongTien/22000).toFixed(2)
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: convertToUSD,
                    currency_code: "USD"
                  },
                },
              ],
            });
        }
        const onApprove= (data, actions)=>{
            console.log(actions)
            return  actions.order.capture();
        }
        const onSave =async (event) => {
            event.preventDefault();
            const exist=this.state.Vouhchers.find((x)=>x.Voucher_ID===this.state.Voucher_User)       
            if(exist===undefined)
            {
                alert('Voucher không hợp lệ ')
            }
            else{
                var day1=new Date(exist.NgayBatDau)
                var day2=new Date(exist.NgayKetThuc)
                var today = new Date();
                var n= today.toLocaleString("en-US",{timeZone:"Asia/Jakarta"});
                if(today<day1&&today>day2)
                {
                    alert('Voucher đã hết hạn')
                }
                else{
                    this.state.Voucher=exist
                    this.setState({Voucher:exist})
                    console.log(this.state.Voucher)
                    this.setState({KhuyenMai:exist.PhanTramKhuyenMai})
                    alert('Voucher hợp lệ ')
                }
            }
        }

        const showGiaTien=(context)=>{
            if(context.cart.length>0)
            {
                const showButton=()=>{
                    if(this.props.User===null){
                        return(
                            <div>
                                <ThanhToanButton/>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div>
                                <button style={{width:"100%", height:"50%", marginTop: 20}} onClick={async ()=>{await addDonHang(false);context.setDHID(this.state.DONHANG_ID);addCTDH(context.cart);context.clearDATA()}} className="btn btn-danger">Đặt hàng</button>
                                <PayPalButton
                                    createOrder={(data, actions) => createOrder(data, actions)}
                                    onApprove={async (data, actions) => {await onApprove(data, actions); await addDonHang(true);context.setDHID(this.state.DONHANG_ID);addCTDH(context.cart);context.clearDATA()}}
                                />
                            </div>
                        )
                    }
                }
                var TongTien=context.cart.reduce((a,c)=>a+c.ThanhTien,0)
                var KhuyenMai=TongTien*this.state.KhuyenMai
                return (
                    <div class="col-12 col-md-12 col-lg-4">
                        <div style={{display:'block'}}>
                            <div className = "column" >
                                    <div className='row' style={{visibility:'visible',alignItems:'center', display:'flex', borderBottom:"1px solid #000", padding: 20, justifyContent:'space-between'}}>
                                        <div style={{fontSize: 16, fontFamily: 'Asap', fontWeight: 'bold'}}>{context.cart.length} Món</div>  
                                        <div style={{fontSize: 16, fontFamily: 'Asap', fontWeight: 'bold'}}>
                                            <span>{this.state.TongTien=TongTien-KhuyenMai}</span>
                                            <span>{this.state.HoTen}</span>
                                        </div>
                                    </div>
                                    <form onSubmit={onSave}>
                                    <input style={{width:"100%", marginTop: 20}} type="text" name="name" placeholder="Nhập mã khuyến mãi" onChange={(event)=>{this.state.Voucher_User=event.target.value}}/>
                                    <input type="submit" value="Áp dụng" style={{width:"100%", height:"50%", marginTop: 20, borderColor:'black', background:'white', color:'black'}}  className="btn btn-danger"/>
                                    </form>
                                    {showButton()}
                            </div>
                        </div>
                    </div>
                )
            }
            return (
            <div style={{width:"100%",height:"100%", display:'inline-block'}}>
                <h1 style={{color:'red',textAlign:'center',borderBottom:"1px solid #000"}}>Giỏ hàng của bạn</h1>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <div >
                    <img  src="https://kfcvietnam.com.vn/templates/images/cart_empty_new.png"/>
                    <p><span>Giỏ của bạn trống?</span> Đặt hàng để thưởng thức công thức đặc biệt của KFC.</p>
                    <Button style={{width:"100%", background: 'red', color: "white"}}>Đặt Hàng</Button>

                    </div>
                </div>
            </div>
            )
        }
        return(
            <CartContext.Consumer>
                {
                    context=>
                    <div className = "container">
                    <div className = "row" style={{justifyContent:"space-between"}}>
                        <div className = "column">
                            {this.showCart(context.cart)}
                        </div>
                        {showGiaTien(context)}
                    </div>
                </div>
                }
            </CartContext.Consumer>
        )
    }
    showCart(cart) {
        var result = null;
        if(cart.length > 0){
            result = cart.map((order, index) => {
                return(
                  <CartContext.Consumer>
                          {
                              props=>
                              <OD key = {index}
                              order = {order}
                              index = {index}
                              addToCart={props.addToCart}
                              removeFromCart={props.removeFromCart}/>
                          }
                  </CartContext.Consumer>
                )
            });
        }
        return result;
    }
    
}
const mapStateToProps=(state)=>{
    return{
        User:state.user
    }
}
const mapDispatchToProps=(dispatch,props)=>{
    return {
        setUser: (User)=>{
            dispatch(actions.SetUser(User))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);

const styles=({
    title:{
        color:'red',
        justifyContent:'center',
        padding: "0.8333333333333333rem 0"
    },
    textCenter:{
        justifyContent:'center'
    }
})