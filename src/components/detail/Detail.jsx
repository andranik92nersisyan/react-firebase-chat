import React from 'react';
import './detail.css';

const Detail = () => {
    return (
        <div className='detail'>
            <div className='user'>
                <img src="/public/avatar.png" alt="user avatar"/>
                <h2>John Doe</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img src="/public/arrowUp.png" alt="down arrow"/>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img src="/public/arrowUp.png" alt="down arrow"/>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Privacy % help</span>
                        <img src="/public/arrowUp.png" alt="down arrow"/>
                    </div>
                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared photos</span>
                        <img src="/public/arrowDown.png" alt="down arrow"/>
                    </div>
                </div>
                <div className='photos'>

                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img 
                                src="https://www.istockphoto.com/resources/images/PhotoFTLP/998044806.jpg"
                                 alt="photo"
                             />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="/public/download.png" alt=""/>
                    </div>
                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img 
                                src="https://www.istockphoto.com/resources/images/PhotoFTLP/998044806.jpg"
                                 alt="photo"
                             />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="/public/download.png" alt=""/>
                    </div>
                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img 
                                src="https://www.istockphoto.com/resources/images/PhotoFTLP/998044806.jpg"
                                 alt="photo"
                             />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="/public/download.png" alt=""/>
                    </div>
                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img 
                                src="https://www.istockphoto.com/resources/images/PhotoFTLP/998044806.jpg"
                                 alt="photo"
                             />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="/public/download.png" alt=""/>
                    </div>
                    <div className='photoItem'>
                        <div className='photoDetail'>
                            <img 
                                src="https://www.istockphoto.com/resources/images/PhotoFTLP/998044806.jpg"
                                 alt="photo"
                             />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="/public/download.png" alt=""/>
                    </div>

                </div>
                <div className='option'>
                    <div className='title'>
                        <span>Shared Files</span>
                        <img src="/public/arrowUp.png" alt="down arrow"/>
                    </div>
                </div>
                <button>Block User</button>
            </div>
        </div>
    );
}

export default Detail;
