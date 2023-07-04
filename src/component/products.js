import React, { useState } from 'react';
import './style/Product.css';

function Product(props) {
    const [data, setData] = useState(props.data)
    return (
        <div>
            <h1 className='Card'>Card</h1>
            {data ?
                (<div className='cardBox'>
                    <h1>{props.data["0"]["Name"]}</h1>
                    <p>Price : Rs. {props.data["0"]["Price"]}</p>
                    <h2>Item Id: {props.data["0"]["id"]}</h2>
                </div>)
                :
                ""

            }
        </div>
    )
}

export default Product