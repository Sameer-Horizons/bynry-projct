import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearchengin } from "react-icons/fa";

const Top = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <li> <Link to="/home">Home</Link> </li>
                    <li> <Link to="/Profiles">Profiles</Link> </li>
                    <li> <Link to="/Addprofile">+Addprofile</Link> </li>
                    <li> <Link to="/About">About</Link> </li>

                    <div className="d" style={{ width: '400px' }}>
                        <input
                            type='text'
                            placeholder='Search..'
                            style={{ borderRadius: '20px', height: '25px', width: '150px', padding: '0px 30px 0px 10px' }} />
                        <button className="clear-button" ><FaSearchengin />
                        </button>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Top;
