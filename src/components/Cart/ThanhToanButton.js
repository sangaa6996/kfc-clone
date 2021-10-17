import { HashRouter as Router, Route, NavLink} from 'react-router-dom';

const ThanhToanButton = (props) => {
    
    return (<div>
        <NavLink to={{pathname:"/DienThongTin"}}  style={{width:"100%", height:"50%", marginTop: 20}} className="btn btn-danger">Tiến hành thanh toán</NavLink>
    </div>)
    
}

export default ThanhToanButton