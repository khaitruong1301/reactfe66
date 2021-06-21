import React, { Component } from 'react'

export default class DataBinding extends Component {
    product = {
        id: 1,
        name: 'Iphone X',
        price: 1000,
        img: 'https://picsum.photos/200/200'
    }

    renderProduct = () => {
        //Xử lý
        this.product.price += 2000;

        //return (=> render ra)
        return <div className="w-25 mt-2">
            <div className="card">
                <img src={this.product.img} alt='...' />
                <div className="card-body">
                    <p>{this.product.name}</p>
                    <p>{this.product.price}</p>
                </div>
                <div className="card-footer bg-dark text-white">
                    <button className="btn btn-success">Đặt mua</button>
                </div>
            </div>
        </div>
    }
    //Phương thức render
    render() {
        let hoTen = 'Nguyễn Văn A'
        let product = {
            id: 1,
            name: 'Iphone X',
            price: 1000,
            img: 'https://picsum.photos/200/200'
        }


        return (
            <div className="container">
                <p id="txtHoTen">Họ tên: {hoTen}</p>
                <div className="w-25 mt-2">
                    <div className="card">
                        <img src={product.img} alt='...' />
                        <div className="card-body">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                        <div className="card-footer bg-dark text-white">
                            <button className="btn btn-success">Đặt mua</button>
                        </div>
                    </div>
                </div>
                {this.renderProduct()}
            </div>
        )
    }
}
