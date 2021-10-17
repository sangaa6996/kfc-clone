import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,NavLink} from 'react-router-dom';
import { CartContext } from '../Cart/CartProvider';



//<MenuLink label = "Test" to activeOnlyWhenExact = {true} />


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
      var active = match ? "active" : '';
      return (
        <li className = {active}>
            <Link to={to}>{label}</Link>
        </li>
      )
    }} />
  )
}

class Menu extends Component {
    render(){
        return (
        <div className="container col-lg-7">
            <div className="wrapper">
              <nav className="navbar navbar-expand-lg navbar-dark justify-content-start" style={{background: '#111', fontWeight: 'bold'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li>
                      <NavLink className="nav-link" to="TrangChu">COMBO 1 NGƯỜI</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="/Combo">COMBO NHÓM</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="UuDai">MENU ƯU ĐÃI</NavLink>
                    </li>
                    <li>
                      <NavLink className="nav-link" to="MonLe">MÓN LẺ</NavLink>
                    </li>
                    <CartContext.Consumer>
                      {
                        props=>
                        <li>
                          <NavLink className="nav-link" to="/Basket">GIỎ HÀNG : {props.cart.length}</NavLink>
                        </li>
                      }
                    </CartContext.Consumer>
                  </ul>
                </div></nav>
            </div>
          </div>
        );
    }
}

export default Menu;