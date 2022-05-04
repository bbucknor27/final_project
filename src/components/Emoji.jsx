import { useState, useEffect } from 'react'
import axios from 'axios'

const Emoji = (props) => {
  const [emoji, setEmoji ] = useState(null)



// const emoji = this.props.Emoji
// let emojiGroups = (new emoji(emoji.smileys_and_people)).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })


// const Emoji = ({ displayEmoji }) => {
//   const [emoji, setEmoji] = useState('')

  useEffect(() => {
    // try {
      const getEmoji = async () => {
        const response = await axios.get('https://emojihub.herokuapp.com/api/all/${props.selectedEmoji}')
        console.log(response)
        setEmoji(response.data)
        // setEmoji(response.data.emoji)
      }

      getEmoji()
    }, [props.selectedEmoji] 





    
    // }
  }, [displayEmoji])

  // return (
  //   <h2 style={{fontStyle: 'italic'}}>{emoji !== '' && emoji}</h2>
  // )
}

export default Emoji

