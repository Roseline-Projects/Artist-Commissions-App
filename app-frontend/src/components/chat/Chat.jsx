import "./chat.css"
import EmojiPicker from 'emoji-picker-react'
import { useState } from "react"

const Chat = () => {
    const [openEmoji, setOpenEmoji] = useState(false)
    const [text, setText] = useState('');


    const handleEmoji = e => {

    }

    return (
        <div className='chat'>
            <div className='top'>
                <div className='user'>
                    <img src='' alt=''/> {/*profile picture*/}
                    <div className='texts'>
                        <span>Username</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='icons'>
                    <img src='' alt=''/> {/*phone call*/}
                    <img src='' alt=''/> {/*info*/}
                </div>
            </div>
            <div className='center'></div>
            <div className='bottom'>
                <div className='icons'>
                    <img src='' alt=''/> {/*send image*/}
                    <img src='' alt=''/> {/*use camera to send img*/}
                </div>
                <input type='text' placeholder='Start a conversation' onChange={e => setText(e.target.value)}/>
                <div className='emoji'>
                    <img src='' alt='' 
                    onClick={() => setOpenEmoji((prev) => !prev)}/>
                    <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji}/>
                </div>
                <button className='sendButton'>Send</button>
            </div>
        </div>
    )
}

export default Chat