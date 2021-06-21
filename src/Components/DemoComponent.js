//Code tạo ra component  : rcc (react class component )

import React, { Component } from 'react'

export default class DemoComponent extends Component {





    //Phương thức render chứa nội dung giao diện của thẻ
    //Nội dung component phải được bao phủ bởi 1 thẻ: thường dùng thẻ div
    render() {
        return (
            <div className="container">
                <div className="content m-2  p-2 bg-dark text-white">
                    <p className="display-4"> Title </p>
                    <p>Content</p>
                </div>
            </div>
        )
    }
}
