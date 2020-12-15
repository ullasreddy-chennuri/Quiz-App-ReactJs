import React, {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import Icon from '@mdi/react';
import {mdiBullseyeArrow} from '@mdi/js';
import {Link} from 'react-router-dom';


const Home = ()=>{
    return (
        <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
            <div id="home">
                <section>
                    <div id='icon-main'>
                        <span className="cube"><Icon path={mdiBullseyeArrow} size={8} color="#f17a12"  /></span>
                    </div>
                    <h1>Quiz App</h1>
                    <div className="play-button-container">
                        <ul>
                            <li ><Link className="play-button" to="/play/instructions">Lets Play!</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                        <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
                    </div>
                </section>
            </div>
        </Fragment>
        
    );
}

export default Home;