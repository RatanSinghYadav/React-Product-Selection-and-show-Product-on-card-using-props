import React, { useState } from 'react';
import Data from './data';
import './style/List.css';
import Product from './products';
function List() {
    const [product] = useState(Data);
    const [newData, setnewData] = useState([]);
    const [show, setShow] = useState()

    console.log(product)

    const sendData = (id) => {
        const filteredData = product.filter((e, Id) => Id === id)
        setnewData(filteredData)
        setShow(filteredData)
        console.log(filteredData);
    }


    return (
        <div className="App">
            <div>
                <div className='list'>List of Items</div>
                {
                    product.map((e, id) => {
                        return (
                            <div className='list'>
                                <span onClick={() => sendData(e.id - 1)}>{e.Name}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {show ?
                    <Product data={newData} />
                    :

                    <>
                        <h1 className='Card'>Card</h1>
                        <div className='cardBox'>
                            <h1>{product["2"]["Name"]}</h1>
                            <p>Price : Rs. {product["2"]["Price"]}</p>
                            <h2>Item Id: {product["2"]["id"]}</h2>
                        </div>
                    </>

                }
            </div>
        </div>
    )
}

export default List