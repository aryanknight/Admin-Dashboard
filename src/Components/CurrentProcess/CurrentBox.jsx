import React from 'react';


export default function CurrentBox({color,no,title}) {
    return (
        <div className={color+" current-box"}>
            <div className="current-box-no">
                {no}
            </div>
            <div className="current-box-text">
                {title}
            </div>
        </div>
    )
}
