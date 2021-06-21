import React, { Component } from 'react'

export default class RenderWithState extends Component {
    /*
        Sự khác biệt của biến và thuộc tính cũng như hàm và phương thức:
        + Thuộc tính và phương thức: có thể sử dụng trong những phương thức khác
        + Hàm và biến thì chỉ sử dụng được tại nơi khai báo nó thôi
    */

    /*
        this.state : Là thuộc tính có sẵn của react class component. Dùng để chứa các giá trị thay đổi trên giao diện khi người dùng thao tác (click, gõ phím, ...)
    */
    state = {
        login: false
    }
    //Thuộc tính
    // login = false;
    userName = 'Trương Tấn Khải';
    renderLogin = () => {


        if (this.state.login) {
            return <span>{this.userName}</span>
        }
        return <button className="btn btn-outline-default" onClick={() => {
            this.handleLogin();
        }}>Đăng nhập</button>
    }


    handleLogin = () => {
        /*
            this.setState: là phương thức có sẵn của react class component dùng để thay đổi giá trị state và gọi lại hàm render => giao diện thay đổi
        */
        // let newState = {
        //     login: true
        // };
        this.setState({
            login: true
        });

    }


    //Phương thức
    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">CYBERSOFT</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="text-white form-inline my-2 my-lg-0">
                            {/* {this.login ? <span>{this.userName} </span> :  <button className="btn btn-outline-default">Đăng nhập</button>} */}

                            {this.renderLogin()}
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}



// function RenderWithState () {
//     this.userName = ''
//     this.login = '';
//     this.render = function () {
//         const tenBien = 'giá trị'
//     }
// }