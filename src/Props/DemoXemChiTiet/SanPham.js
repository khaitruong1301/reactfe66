import React, { Component } from 'react'

export default class SanPham extends Component {




    render() {
        let {sp} = this.props;
        return (
            <div className="card bg-dark text-white">
                <img src={sp.hinhAnh} alt="..." height={300} />
                <div className="card-body">
                    <p>{sp.tenSP}</p>
                    <p>{sp.giaBan}</p>
                    <button onClick={() => {
                        //Định nghĩa sự kiện click trên mỗi sản phẩm
                        this.props.xemChiTiet(sp);
                       
                    }} className="btn btn-success">Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
