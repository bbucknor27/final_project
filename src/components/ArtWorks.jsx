import { useState, useEffect } from 'react'
import axios from 'axios'

const ArtWork = ({ displayArt }) => {
  const [art, setArt] = useState('')

  useEffect(() => {
    try {
      const getArtWork = async () => {
        const response = await axios.get("https://api.artic.edu/api/v1/artworks/129884")
        setArt(response.data.art)
      }
      getArtWork()
    } catch (error) {
      return console.error
    }
  }, [displayArt])

  return (
    <h2 style={{fontStyle: 'italic'}}>{art !== '' && art}</h2>
  )
}

// export default ArtWork

// change KanyeQuote to ArtWork  --  DONE

// change displayQuote to displayArt  --  DONE