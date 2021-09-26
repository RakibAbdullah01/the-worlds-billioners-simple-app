import React from 'react';
const Header = () => {
    return (
        <div className="header text-center p-5 bg-primary text-light">
            <h1 className="text-warning fw-bold text-uppercase"> The World's Billionaires</h1>
            <p className="lh-base fs-4">The World's Billionaires is an annual ranking by documented net worth of the wealthiest billionaires in the world, compiled and published in March annually by the American business magazine Forbes.</p>
            <h4>Lets see top <span className="fs-1 text-warning">12</span> billioners...</h4>
        </div>
    );
};

export default Header;