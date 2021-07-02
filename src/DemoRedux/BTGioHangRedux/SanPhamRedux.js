import React, { Component } from 'react'
//Kết nối reduxe
import {connect} from 'react-redux';


class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;
        console.log('propsSanPham',this.props)
        return (
            <div className="card text-left">
                <img height={300} className="card-img-top" src={sanPham.hinhAnh} alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan}</p>
                    <button className="btn btn-danger" onClick={()=>{
                        //action : là dữ liệu gửi lên redux để redux xử lý làm thay đổi các state hiện tại (state giỏ hàng, state khác...)
                        const action = {
                            type: 'THEM_GIO_HANG', //Thuộc tính bắt buộc của action 
                            sanPhamClick: sanPham
                        }
                        //Dùng hàm this.props.dispatch để đưa dữ liệu lên reducer (redux store)
                        this.props.dispatch(action);
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}


//sử dụng hàm connect để tạo ra 1 component liên kết với redux store
export default connect()(SanPhamRedux);