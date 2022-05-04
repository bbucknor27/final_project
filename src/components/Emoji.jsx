import { useState, useEffect } from 'react'
import axios from 'axios'

const movie = props.artworks
let releaseDate = (new Date(movie.release_date)).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })


const ArtWorks = ({ displayArt }) => {
  const [art, setArt] = useState('')

  useEffect(() => {
    try {
      const getArtWorks = async () => {
        const response = await axios.get("https://api.artic.edu/api/v1/artworks/129884")
        setArt(response.data.art)
      }
      getArtWorks()
    } catch (error) {
      return console.error
    }
  }, [displayArt])

  return (
    <h2 style={{fontStyle: 'italic'}}>{art !== '' && art}</h2>
  )
}

export default ArtWorks

// export default ArtWorks

// change KanyeQuote to ArtWorks  --  DONE

// change displayQuote to displayArt  --  DONE