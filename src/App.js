import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, RANDOM_EMOJI_URL } from './globals'
import emojiArray from './data/package-lock.json'
import Emoji from './components/Emoji'
import EmojiSymbols from './components/EmojiSymbols'


const App = (props) => {
  const [displayEmoji, setDisplayEmoji] = useState(false)

  const toggleEmoji = () => {
    displayEmoji ? setDisplayEmoji(false) : setDisplayEmoji(true)
  }

  return (
    <div className="App">
      <h1>World of Emojis</h1>
      <main>
        <div className="emoji-container">
          {displayEmoji ? (
            <Emoji ddisplayEmoji={displayEmoji} />
          ) : (
            <h2>See Some EEEmojis</h2>
          )}

        {emojiArray.map((emoji, index) => (
        <div className="emoji" key={emoji.id}>
            <Emoji emoji={emoji} key={emoji.id}/>
        </div>
      ))}

        </div>

        <button onClick={toggleEmoji}>
          {displayEmoji ? 'Clear Emoji' : 'New Emoji'}
        </button> 
      </main>

    </div>
  )
}

export default App

//////////////////////////////////////////////////////////////

// review u3_hw_movie_mapping 