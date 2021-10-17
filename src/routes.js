import React, { Component } from 'react';
import Homepage from './pages/ComBoMotNguoi/Homepage';
import ThemSP from './pages/Them San Pham/themsp'
import MenuUuDai from './pages/MenuUuDai/MenuUuDai';
import MonLe from './pages/MonLe/MonLe';
import ComboMon from './pages/ComboMon/ComboNhieuNg';
import Notfound from './pages/NotFound/404';
import DS from './pages/DanhSachSanPham/DanhSachSanPham';
import Cart from './components/Cart/Cart';
import DangKi from './pages/DangKi/Dangki';
import DangNhap from './pages/DangKi/Dangnhap';
import { propTypes } from 'react-bootstrap/esm/Image';
import DienThongTin from './pages/DangKi/DienThongTin';


const routes = [
    {
        path : '/ComBo1Nguoi',
        exact : true,
        main: () => <Homepage/>
    },
    {
        path : '/Sanpham/them',
        exact : false,
        main: () => <ThemSP/>
    },
    {
        path : '/Menu Uudai',
        exact : false,
        main: () => <MenuUuDai/>
    },
    {
        path : '/Mon Le',
        exact : false,
        main: () => <MonLe/>
    },
    {
        path : '/Danhsach',
        exact : false,
        main: () => <DS/>
    },
    {
        path : '/ComboNhieuNguoi',
        exact : false,
        main: () => <ComboMon/>
    },
    {
        path : '/Basket',
        exact : false,
        main: () => <Cart/>
    },
    {
        path : '/Dangki',
        exact : false,
        main: () => <DangKi/>
    },
    {
        path : '/Dangnhap',
        exact : false,
        main: () => <DangNhap/>
    },
    {
        path : '/DienThongTin',
        exact : false,
        main: () => <DienThongTin/>
    },
    {
        path : '',
        exact : false,
        main: () => <Notfound/>
    },
    

];

export default routes;