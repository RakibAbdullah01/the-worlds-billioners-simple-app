import React from 'react';

const Billioners = (props) => {
    const{img,name,age,worth,source,country}=props.billoner;
    return (
            <div className="col-md-4  p-2 text-center">
                <div className="card h-100 ms-auto">
                    <div className="text-center">
                        <img src={img} className="rounded img-fluid" alt="..."/>
                    </div>
                <div className="card-body">
                    <h3 className="text-dark">{name}({age})</h3>
                    <h6>{country}</h6>
                    <h5> Source: {source}</h5>
                </div>
                <div className="py-2">
                    <h4>Worth : <span className="text-danger">${worth}B</span></h4>
                </div>
                <div className="card-footer">
                    <button 
                    className="btn btn-success" onClick={()=>props.handleInvitation(props.billoner)}
                    >  Send Invitation <i class="fas fa-paper-plane"></i> </button>
                </div>
            </div>
        </div>
    );
};

export default Billioners;