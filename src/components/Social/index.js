import React from 'react';
import './style.css'
export default function Social({url, children}) {
    return (
        <a href={url} className="social" rel='noopener noreferrer' target='_blank'>
            {children}
        </a>
    );
}