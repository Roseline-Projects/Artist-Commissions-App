import "./chatList.css"
import { useState } from "react"

const ChatList = () => {
    const [addMode, setAddMode] = useState(false) 
    /*Switches between +/- icons for add user*/

    return (
        <div className='chatList'>
            <div className='search'>
                <div className='searchBar'>
                    <img src='' alt=''/> {/*Search image*/}
                    <input type='text' placeholder='Search...'/>
                </div>

                <img src={addMode ? '' : '' } 
                alt='' className='add'
                onClick={() => setAddMode(prev=> !prev)} 
                /> {/*Switches between +/- on click*/}

            </div>
            <div className="item">
                <img src='' alt='' />
                <div className="text">
                    <span>Username</span>
                    <p>Domain Expansion</p>
                </div>
            </div>
            <div className="item">
                <img src='' alt='' />
                <div className="text">
                    <span>Username</span>
                    <p>Domain Expansion</p>
                </div>
            </div>
            <div className="item">
                <img src='' alt='' />
                <div className="text">
                    <span>Username</span>
                    <p>Domain Expansion</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList