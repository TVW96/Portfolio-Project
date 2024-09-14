import React from 'react';
import "./BubbleMenu.css";
import icon from "../logo.svg";

function BubbleMenu() {
    return (
        <div className='bm-container'>
            <div className='panel'>
                <div className='bubble'>
                    <img src={icon} className='bubble-icon' />
                </div>
                Item
            </div>
            <div className='panel'>
                <div className='bubble'>
                    <img src={icon} className='bubble-icon' />
                </div>
                Item
            </div>
            <div className='panel'>
                <div className='bubble'>
                    <img src={icon} className='bubble-icon' />
                </div>
                Item
            </div>
        </div>
    )
}

export default BubbleMenu