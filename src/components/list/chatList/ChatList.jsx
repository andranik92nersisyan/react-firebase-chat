import React, { useState } from 'react';
import './chatList.css';

const ChatList = () => {
    const [addMode,setAddMode] = useState(false);

    return (
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <img src="/public/search.png" alt='icon' />
                    <input type='text' placeholder='Search' />
                </div>
                <img 
                src={addMode ? "/public/minus.png" : "/public/plus.png"} 
                alt='icon' 
                className='add'
                onClick={() => setAddMode((prev) => !prev)}
                />
            </div>
            <div className='item'>
                <img src="/public/avatar.png" alt=""/>
                <div className='texts'>
                    <span>John Doe</span>
                    <p>Hey there!</p>
                </div>
            </div>
            <div className='item'>
                <img src="/public/avatar.png" alt=""/>
                <div className='texts'>
                    <span>John Doe</span>
                    <p>Hey there!</p>
                </div>
            </div>
            <div className='item'>
                <img src="/public/avatar.png" alt=""/>
                <div className='texts'>
                    <span>John Doe</span>
                    <p>Hey there!</p>
                </div>
            </div>
            <div className='item'>
                <img src="/public/avatar.png" alt=""/>
                <div className='texts'>
                    <span>John Doe</span>
                    <p>Hey there!</p>
                </div>
            </div>
            <div className='item'>
                <img src="/public/avatar.png" alt=""/>
                <div className='texts'>
                    <span>John Doe</span>
                    <p>Hey there!</p>
                </div>
            </div>
        </div>
    );
}

export default ChatList;
