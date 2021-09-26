import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    for (const person of props.invited){
        total = total+person.worth;
    };
    return (
        <div>
            <div className="mt-2 p-3 cart">
                <h3>Total Invited Person: {props.invited.length}</h3>
                <h3>Total Worth:${total.toFixed(2)}B </h3>
                </div>
            <ul>
                <br/>
            <h4>Invited Billioners List:</h4> 
                {                
                    props.invited.map(person=> <ul className="list-unstyled">
                        <li className="d-flex align-items-center rounded my-2 bg-info">
                            <img src={person.img} alt="" width="80px" />
                            <h5 className="ps-3">{person.name}</h5>
                        </li>
                    </ul>)
                }
            </ul>
        </div>
    );
};

export default Cart;