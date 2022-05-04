import { useState, useEffect } from 'react'
import axios from 'axios'

const emoji = this.props.Emoji
//let releaseDate = (new Date(movie.release_date)).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })


const Emoji = ({ displayEmoji }) => {
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    try {
      const getEmoji = async () => {
        const response = await axios.get("https://emojihub.herokuapp.com/api/all")
        setEmoji(response.data.emoji)
      }
      getEmoji()
    } catch (error) {
      return console.error
    }
  }, [displayEmoji])

  return (
    <h2 style={{fontStyle: 'italic'}}>{emoji !== '' && emoji}</h2>
  )
}

export default Emoji

