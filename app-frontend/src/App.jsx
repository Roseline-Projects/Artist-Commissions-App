import { useState } from 'react'
import './App.css'
import Chat from "./components/chat/Chat"
import Detail from "./components/details/Detail"
import List from "./components/list/List"

function App() {
  // const [count, setCount] = useState(0)

  return (
     <div className='main-container'>
      {/* */}
      {/*Components for the main 3 webapp-messaging divisions*/}
      <List/>
      <Chat/>
      <Detail/>
     </div>
  )
}

export default App
