import React, { Component } from 'react'
import ProductItem from './ProductItem';
export default class ProductList extends Component {


    renderProduct = () => {
        //Lấy giá trị từ component app truyền vào thông qua props (arrProduct)
        let arrProduct = this.props.arrProduct;

        return arrProduct.map((item, index) => {
            return <div className="col-4 mt-2" key={index}>
                <ProductItem product={item} />
            </div>
        })

    }

    render() {
        // this.props
        return (
            <div className="container-fluid" style={{ minHeight: '100vh' }}>
                <div className="row">
                    <div  className="col-4 nav flex-column nav-pills justify-content-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                        <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Shop</a>
                    </div>
                    <div className="col-8 tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <h3 className="text-center">Shoes Shop</h3>
                            <div className="row">
                                {this.renderProduct()}
                                {/* <div className="col-4">
                                    <ProductItem />
                                </div>
                                <div className="col-4">
                                    <ProductItem />
                                </div>
                                <div className="col-4">
                                    <ProductItem />
                                </div> */}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">shop</div>

                    </div>
                </div>
            </div>

        )
    }
}
