import React,{Component ,Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {link, Link} from 'react-router-dom'

const QuizInstructions= ()=>{
    return (
        <Fragment>
            <Helmet>
                <title>Quiz Instructions - Quiz App</title>
            </Helmet>
        <div>
            <h1>This is Instructions page</h1>
            <div className="btn-instructions">
                <span className="left-l"><Link to="/">No take me back</Link></span>
                <span className="right-l"><Link to="/play/quiz">Lets Start the test!</Link></span>
            </div>
        </div>
        </Fragment>
    );
};

export default QuizInstructions;