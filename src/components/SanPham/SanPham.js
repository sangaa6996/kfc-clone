import React, { Component } from 'react';
import { CartContext, CartProvider } from '../Cart/CartProvider';
import api from '../../utils/apicaller'


class sanpham extends Component {
    state={
      KhuyenMais:null,
      KhuyenMai:0,
    }
      componentDidMount() {
        api('api/KhuyenMai', 'GET', null).then(res => {
            this.setState({KhuyenMais: res.data}) 
            var { sanpham, index } = this.props;
            const exist= res.data.find((x)=>x.KhuyenMai_ID===sanpham.KhuyenMai_ID);
            if(exist){
              this.setState({KhuyenMai:exist.PhanTramKhuyenMai*sanpham.DonGia})
            }
        });
    }
    render(){
        var { sanpham, index } = this.props;
        return (
              <CartContext.Consumer>
              {
                context=><div className="card" style={{width: '18rem', margin: '10px'}}>
                <img src={sanpham.AnhMon} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{sanpham.TenMon}</h5>
                  <h5 className="card-price"><strike>{sanpham.DonGia}</strike></h5>
                  <h5 className="card-price">{sanpham.DonGia-this.state.KhuyenMai}</h5>
                  <p className="card-text">{sanpham.MoTa}</p>
                  <button onClick={()=>context.addToCart(sanpham,this.state.KhuyenMai)} className="btn btn-danger">Thêm món</button>
                  <a href="#/option" className="btn btn-outline-dark">Tùy chỉnh</a>
                </div>
              </div>
              }
            </CartContext.Consumer>
        );
    }
}
export default sanpham;