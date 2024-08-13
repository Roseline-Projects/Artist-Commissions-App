import "./userInfo.css"

const Userinfo = () => {
    return (
        <div className='userInfo'>
            <div className='user'>
                <img src='' alt=''/> {/*generic avatar img*/}
                <h2>Username</h2>
            </div>
            <div className='icons'>
                 {/*More, video, edit*/}
                <img src='' alt=''/> 
                <img src='' alt=''/>
                <img src='' alt=''/>
            </div>
        </div>
    )
}

export default Userinfo