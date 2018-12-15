import React from 'react';

export default function Row ({ label, children }) {
    const child = typeof children === 'object' ? React.Children.only(children) : children;

    return (
        <div className="row">
            <div className="label">{label}</div>
            <div className="content">{child}</div>
        </div>
    );
};
