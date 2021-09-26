import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Billioners from '../Billioners/Billioners';

const Main = () => {
    const[billioners,setBillioners]=useState([]);
    useEffect(()=>{
        fetch('./billioners.JSON')
        .then(res=>res.json())
        .then(data=>setBillioners(data));
    },[]);

    // Handle Invited Function
    const[invited,setinvited]=useState([]);
    const handleInvitation = (billoner)=>{
        const newInvited = [...invited, billoner];
        setinvited(newInvited);
    }

    return (
        <section className="p-2">
            <div className="row">
                {/* Billoners Section */}
                <div className="col-md-8">

                    {/* Single Billoner */}
                    <div className="row p-2">
                        {
                        billioners.map(billoner=> <Billioners 
                            key={billoner.id}
                            billoner={billoner}
                            handleInvitation={handleInvitation}
                            ></Billioners>)
                        }
                    </div>
                </div>

                {/* Cart Section */}
                <div className="col-md-4">
                    <Cart invited={invited}></Cart>
                </div>
            </div>
        </section>
    );
};

export default Main;