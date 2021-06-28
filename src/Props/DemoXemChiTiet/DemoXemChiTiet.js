import React, { Component } from 'react'
import SanPham from './SanPham';
import Carts from './Carts';
export default class DemoXemChiTiet extends Component {
    mangSanPham = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
    ]

    state = {
        sanPhamChiTiet : { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" },
        gioHang: []
            // {maSP:1,tenSP:'I phone XS Max',soLuong:1,giaBan:1000,hinhAnh:'./img/applephone.jpg'},
            
        
    }


    tangGiamSoLuong = (maSP,soLuong) => {

        console.log(maSP,soLuong);
        let gioHangCapNhat = [...this.state.gioHang];


        //Kiểm tra sp có trong gio hàng k 
        let spGH = gioHangCapNhat.find(spGH => spGH.maSP === maSP);

        if(spGH) {
            spGH.soLuong += soLuong; // 5 + 1 = 6, 5 + (-1) = 4
            if(spGH.soLuong < 1) {
                alert('Số lượng tối thiểu là 1'); 
                spGH.soLuong -= soLuong;
                //xoá khi = 0
                // this.xoaGioHang(maSP);
                // return;
            }
        }

        //chắc chắn gọi hàm setState 
        this.setState({
            gioHang:gioHangCapNhat
        })
    }



    //Hàm xoá sp giỏ hàng đặt tại nơi chứa state giỏ hàng
    xoaGioHang = (maSP) => {
        console.log('sanPhamClick',maSP)
        //Từ mã sp tìm ra sản phẩm trong mảng => xoá đi
        let gioHangCapNhat = [...this.state.gioHang];

        // let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === maSP);
        // //Tìm thấy sp click trong giỏ hàng
        // if(index !== -1) {
        //     gioHangCapNhat.splice(index,1);
        // }


        gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== maSP);




        //chắc chắn gọi hàm setState 
        this.setState({
            gioHang:gioHangCapNhat
        })

    }



    themGioHang = (spClick) => {
        console.log('sanPhamClick',spClick);
        //Thêm thuộc tính số lượng cho spClick
        let spGioHang = {...spClick,soLuong:1};

        //Khi người dùng click vào => thêm sản phẩm đươc click vào mảng giỏ hàng
        //this.state.gioHang = [{maSP:1,...},{maSP:2,...}]
        let gioHangCapNhat = [...this.state.gioHang];
        
        //Tìm sản phẩm được click có trong giỏ hàng hay chưa
        let sp = gioHangCapNhat.find(spGH => spGH.maSP === spGioHang.maSP);

        if(sp) { //spClick có trong giỏ hàng
            sp.soLuong += 1; //tăng số lượng 
        }else {
            //Thêm sản phẩm được click vào giỏ hàng
            gioHangCapNhat.push(spGioHang);
        }

        console.log('Giỏ hàng sau khi cập nhật',gioHangCapNhat);

        //Gọi hàm setState cập nhật lại giỏ hàng và render lại giao diện
         this.setState({
             gioHang:gioHangCapNhat
         });
    }

    renderSanPham = () => {
        return this.mangSanPham.map((sanPham,index) => {
            return <div className="col-4" key={index}>
                <SanPham sp={sanPham} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang} />
            
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


    tinhTongSoLuong = () => {

        let tongSoLuong = this.state.gioHang.reduce((tong,spGH,index) =>{
            return tong += spGH.soLuong;
        },0);

        return tongSoLuong;

    }


    render() {

        let {sanPhamChiTiet} = this.state;
        return (
            <div className="container">
                <Carts gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="text-right">
                    <span className="btn" data-toggle="modal" data-target="#modelId">Giỏ hàng ({this.tinhTongSoLuong()})</span>
                </div>
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
