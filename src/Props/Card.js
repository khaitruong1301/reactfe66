import React, { Component } from 'react'

export default class Card extends Component {





    render() {

        //So sánh sự khác biệt giữa this.state và this.props
        /*
            Giống nhau:
                Đều là thuộc tính có sẵn của react class component để chứa các giá trị cần render ra giao diện
            Khác nhau: 
                + state dùng để chứa các giá trị thay đổi khi người dùng thao tác trên giao diện.
                props dùng để nhận giá trị từ component cha truyền vào
                + state có thể gán lại được giá trị mới bằng phương thức setState
                + props không thể gán lại giá trị mới
        */


        //this.props là thuộc tính có sãn của react class component
        let product = this.props.product;
        // this.props.product = {id:1,name:'IPhone',price:1000,image:'https://picsum.photos/id/30/200/200'};

        return (
            <div className="card bg-dark text-white">
                <img src={product.image} alt="..." />
                <div className="card-body">
                    <p className="font-weight-bold">{product.name}</p>
                    <p>{product.price}</p>
                </div>
            </div>
        )
    }
}
