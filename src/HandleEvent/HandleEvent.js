import React, { Component } from 'react'

export default class HandleEvent extends Component {



    showMessage = () => {
        alert(123231321);
    }



    showTile = (tenLop) => {
        console.log(`Hello ${tenLop}` )
    }

    render() {
        const name = 'Phương';
        const handleClick = (event) => {
            document.querySelector('#btnClick').style.backgroundColor = 'red';
            alert('Hello cycbersoft');
        }


        return (
            <div className="container">
                xử lý sự kiện trong react
                <br />


                <button id="btnClick" onClick={handleClick} >Click me !!!</button>

                <button onClick={() => {

                        alert(`hello ${name}`);
                        this.showTile('Front end 66');
                }} >show message</button>


            </div>
        )
    }
}
