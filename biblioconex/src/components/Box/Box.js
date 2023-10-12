import React from 'react';
import './Box.css';

export default function Box({ image, text, buttonText, linkTo }) {
    return (
        <div className="Contents">
            <div className="Image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="Text">{text}</div>
            <a href={linkTo} className="ButtonLink">
                <button>{buttonText}</button>
            </a>
        </div>
    );
}
