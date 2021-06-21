import React from 'react'

export default function DataBindingReactFunc() {

    const title = 'cybersoft';
    const renderImage = () => {
        return <img src="https://picsum.photos/200/200" alt="..." />
    }


    return (
        <div className="container">
            <p>Tiêu đề: {title}</p>
            {renderImage()}
        </div>
    )
}
