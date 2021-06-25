import React, { Component } from 'react'
import SanPham from './SanPham';
export default class DemoXemChiTiet extends Component {
    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet : { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    }

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham,index) => {
            return <div className="col-4" key={index}>
                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet} />
                {/* <div className="card bg-dark text-white">
                    <img src={sanPham.hinhAnh} alt="..."  height={300} />
                    <div className="card-body">
                        <p>{sanPham.tenSP}</p>
                        <p>{sanPham.giaBan.toLocaleString()}</p>
                        <button onClick={()=>{
                            //Định nghĩa sự kiện click trên mỗi sản phẩm
                            this.xemChiTiet(sanPham);
                        }} className="btn btn-success">Xem chi tiết</button>
                    </div>
                </div> */}
            </div>
        })
    }
    xemChiTiet = (sanPhamDuocClick) => {
        console.log('sanPhamCLick',sanPhamDuocClick)

        // Thay đổi sản phẩm chi tiết trong state = sản phẩm được click
        this.setState({
            sanPhamChiTiet: sanPhamDuocClick
        })

    }



    render() {

        let {sanPhamChiTiet} = this.state;
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>

                <div className="row mt-2">
                    <div className="col-4">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh}  height={300} alt="..." />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">Thông số kỹ thuật</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn hình</th>
                                    <th>{sanPhamChiTiet.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>Hệ điều hành</th>
                                    <th>{sanPhamChiTiet.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera trước</th>
                                    <th>{sanPhamChiTiet.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <th>{sanPhamChiTiet.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{sanPhamChiTiet.ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{sanPhamChiTiet.rom}</th>
                                </tr>
                            </thead>

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
