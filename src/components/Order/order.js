import React, { Component } from 'react';
import api from '../../utils/apicaller'


class order extends Component {
  state={
    KhuyenMais:null,
    KhuyenMai:0
  }
  componentDidMount() {
    api('api/KhuyenMai', 'GET', null).then(res => {
        this.setState({KhuyenMais: res.data}) 
        var { order, index } = this.props;
        const exist= res.data.find((x)=>x.KhuyenMai_ID===order.KhuyenMai_ID);
        if(exist){
          this.setState({KhuyenMai:exist.PhanTramKhuyenMai*order.DonGia})
        }
    });
}
    render(){
        var { order, index, addToCart, removeFromCart } = this.props;
        
        return (
        <div class="col-12 col-md-12 col-lg-8" style={{padding: 10}}>
          <div className="card" style={{width: '40rem'}}>
          <div className="card-body">
            <div>
            <h3 className="card-title">{order.TenMon}</h3>
            <ul style={{borderBottom:"1px solid #000", padding: 20}}>
              <li>{order.MoTa}</li>
            </ul>
            <div className='row' style={{justifyContent:'space-between'}}>
            <div style={{display:'block',justifyContent:'space-between'}}>
            <button onClick={() => removeFromCart(order,this.state.KhuyenMai)} style={{textAlign:'center', width:40, height:40, borderRadius:20, background: 'white'}}>-</button>
            <span style={{fontWeight: 'bold', fontSize: 24, fontFamily: 'Asap', padding: 0.5}}>     {order.SoLuongMua}     </span>
            <button onClick={() => addToCart(order,this.state.KhuyenMai)} style={{textAlign:'center', width:40, height:40, borderRadius:20, background: 'white'}}>+</button>
            </div>
            <div style={{justifyItems:'flex-end', display:'block',fontWeight: 'bold', fontSize: 24, fontFamily: 'Asap'}}><span >{order.ThanhTien}đ</span></div>         
            </div>
            </div>
          </div>
          </div>
        </div>
        );
    }
}
export default order;