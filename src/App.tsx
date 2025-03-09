import { useContext } from 'react'
import './App.css'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'

function App() {

  const playerContext = useContext(PlayerContext)
  const audioRef = playerContext ? playerContext.audioRef : null
  const track = playerContext ? playerContext.track : null


  return (
      <div className='bg-black h-screen'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} preload="auto" src={track?.file}></audio>
      </div>
  )
}

export default App
