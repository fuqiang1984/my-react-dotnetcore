
import React, { Component } from 'react';


export default function CompleteButton({ title,buttonText,handleClick }) {

    
    return (
        <React.Fragment>
            <div className='third'>
                <div className='goalsetting'>
                    <h3>{title}}</h3>
                    <a className='button featurebutton' onClick={handleClick}>{buttonText}</a>
                </div>
            </div>
        </React.Fragment>

        );
    

}