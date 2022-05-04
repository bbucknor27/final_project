import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, RANDOM_EMOJI_URL } from './globals'
import Random from './components/Random'




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

{artworksArray.map((artworks, index) => (
        <div className="artworks" key={artworks.id}>
            <ArtWorks artworks={artworks} key={artworks.id}/>
        </div>
      ))}







        </div>

        <button onClick={toggleArt}>
          {displayArt ? 'Clear Art' : 'New Art'}
        </button> 
      </main>

    </div>
  )
}

export default App


// review u3_hw_movie_mapping 

// change KanyeQuote to ArtWorks  --  DONE

// change displayQuote to displayArt  --  DONE

// change toggleQuote to toggleArt  --  DONE