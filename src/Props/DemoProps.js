import React, { Component } from 'react';
import Card from './Card';
import CardFunction from './CardFunction';

export default class DemoProps extends Component {

    arrProduct = [
        {id:1,name:'IPhone',price:1000,image:'https://picsum.photos/id/30/200/200'},
        {id:1,name:'Sony XZ',price:2000,image:'https://picsum.photos/id/40/200/200'},
        {id:1,name:'Xiaomi mi 9',price:3000,image:'https://picsum.photos/id/50/200/200'},
    ]

    renderProduct = () => {
        const jsx = this.arrProduct.map((item,index)=>{
            return <div className="col-4" key={index}>
                <CardFunction product={item} />
            </div>
        });
        return jsx;
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                {/* <Card product={this.arrProduct[0]} />
                <Card product={this.arrProduct[1]} />
                <Card product={this.arrProduct[2]} /> */}

                <div className="row">
                    {this.renderProduct()}
                </div>
                
            </div>
        )
    }
}
