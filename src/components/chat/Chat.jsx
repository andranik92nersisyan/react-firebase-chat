import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './chat.css';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = e => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  console.log(text);
 
  return (
    <div className='chat'>
      <div className='top'>
        <div className='user'>
          <img src="/public/avatar.png" alt="" />
          <div className='texts'>
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='icons'>
          <img src="/public/phone.png" alt="" />
          <img src="/public/video.png" alt="" />
          <img src="/public/info.png" alt="" />
        </div>
      </div>

      <div className='center'>

        <div className='message'>
          <img src="/public/avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            <span>1 min age</span>
            <span className='time'>12:30 PM</span>
          </div>
        </div>

        <div className='message own'>
          {/* <img src="/public/avatar.png" alt="" /> */}
          <div className='texts'>
            <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            <span>1 min age</span>
            <span className='time'>12:35 PM</span>
          </div>
        </div>

        <div className='message'>
          <img src="/public/avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            <span>1 min age</span>
            <span className='time'>12:35 PM</span>
          </div>
        </div>

        <div className='message own'>
          {/* <img src="/public/avatar.png" alt="" /> */}
          <div className='texts'>
            <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            <span>1 min age</span>
            <span className='time'>12:35 PM</span>
          </div>
        </div>

        <div className='message'>
          <img src="/public/avatar.png" alt="" />
          <div className='texts'>
            <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            <span>1 min age</span>
            <span className='time'>12:35 PM</span>
          </div>
        </div>

        <div className='message own'>
          <div className='texts'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tWkfCJfejkeaq78A0p6L5CZWFFVwxyz0DA&s" alt="" />
            <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.</p>
            <span>1 min age</span>
            <span className='time'>12:35 PM</span>
          </div>
        </div>

      </div>

      <div className='bottom'>
        <div className='icons'>
          <img src="/public/img.png" alt="" />
          <img src="/public/camera.png" alt="" />
          <img src="/public/mic.png" alt="" />
        </div>
        <input 
          type='text' 
          placeholder='Type a message...' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='emoji'>
          <img 
            src="/public/emoji.png" 
            alt="" 
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className='picker'>
            {open && <EmojiPicker onEmojiClick={handleEmoji}/>}
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
}

export default Chat;
