import { useState } from 'react'
import './App.css'
import axios from 'axios'
import ArtWorks from './components/ArtWorks'

const App = () => {
  const [displayArt, setDisplayArt] = useState(false)

  const toggleArt = () => {
    displayArt ? setDisplayArt(false) : setDisplayArt(true)
  }

  return (
    <div className="App">
      <h1>World of Art Works</h1>
      <main>
        <div className="art-container">
          {displayArt ? (
            <ArtWorks displayArt={displayArt} />
          ) : (
            <h2>See Some ArtWorks</h2>
          )}
        </div>

        <button onClick={toggleArt}>
          {displayArt ? 'Clear Art' : 'New Art'}
        </button>
      </main>
    </div>
  )
}

export default App;


// review u3_hw_movie_mapping 

// change KanyeQuote to ArtWorks  --  DONE

// change displayQuote to displayArt  --  DONE

// change toggleQuote to toggleArt  --  DONE