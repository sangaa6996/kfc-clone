import './header.css';
import { HashRouter as Router, Route, NavLink} from 'react-router-dom';
import { CartContext } from '../components/Cart/CartProvider';
import axios from 'axios';
const Header = (props) => {
    const logout = async () => {
        await axios.post('https://localhost:5001/api/logout', {
        },{
            withCredentials: true,
            headers: {'Content-Type':'application/json'}
        }
        )
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    let menu
    if(props.name === '')
    {
        menu = (
            <div className="select_header select_user clearfix">
                <div>
                    <NavLink to={{pathname:"/Dangnhap",state:{setName:props.setName}}} className="pc btn btn-default dropdown-toggle kfc_call_login" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Đăng nhập</NavLink>
                </div>
            </div>
        )
    }else{
        menu = (
            <div className="select_header select_user clearfix">
                <div>
                    <a className="pc btn btn-default dropdown-toggle kfc_call_login" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={logout}>{props.name}</a>
                </div>
            </div>
        )
    }

    return(
    <header id="header" className="clearfix">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-start">
                <a className="navbar-brand" href="https://kfcvietnam.com.vn/vi">
                    <img className="pc" src="https://kfcvietnam.com.vn/templates/images/logo_pc.png"/>
                </a>
                <div className="navbar-collapse justify-content-end offcanvas-collapse" id="navbar-collapse">
                    <ul id="menu_top" className="navbar-nav">
                        <li className="nav-item pc">
                            <div className="select_header select_lang clearfix">
                                <div className="dropdown">
                                    <a className="btn btn-default dropdown-toggle" href="javascript:void(0);" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VN</a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item active" href="javascript:void(0);">VN</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            {menu}
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="sidebar" className="sidebar wap_nav_scroller">
                <div className="sidebar__inner wap_nav_fix">
                    <div className="nav-scroller">
                        <ul className="nav d-flex justify-content-start mb-0">
                            <li className="nav-item" id="headerMenuCate-14">
                                <NavLink className="nav-link" to="ComBo1Nguoi">COMBO 1 NGƯỜI</NavLink>
                            </li>
                            <li className="nav-item" id="headerMenuCate-15">
                                <NavLink className="nav-link" to="/ComboNhieuNguoi">COMBO NHÓM</NavLink>
                            </li>
                            <li className="nav-item" id="headerMenuCate-13">
                                <NavLink className="nav-link" to="Menu UuDai">MENU ƯU ĐÃI</NavLink>
                            </li>
                            <li className="nav-item" id="headerMenuALaCarte">
                                <NavLink className="nav-link" to="Mon Le">MÓN LẺ</NavLink>
                            </li>
                            <CartContext.Consumer>
                                {
                                    context=>
                                    <li>
                                    <NavLink className="nav-link" to="Basket">GIỎ HÀNG : {context.cart.length}</NavLink>
                                    </li>    
                                }
                            </CartContext.Consumer>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header