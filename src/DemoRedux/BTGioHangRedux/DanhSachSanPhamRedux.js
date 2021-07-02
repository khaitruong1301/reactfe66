import React, { Component } from 'react';
import SanPhamRedux from './SanPhamRedux';
import GioHangRedux from './GioHangRedux';
export default class DanhSachSanPhamRedux extends Component {

    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham,index)=>{
            return <div className="col-4" key={index}>
                <SanPhamRedux sanPham={sanPham} />
            </div>
        })
    }



    render() {
        return (
            <div className="container">
                
                <h3 className="text-center">Danh sách sản phẩm</h3>
                
                <GioHangRedux />
                
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
