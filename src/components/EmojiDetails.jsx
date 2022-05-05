import { useState, useEffect } from 'react'
import axios from 'axios'
import emoji from './EmojiData'



///////////////////////////////////
///////////////////////////////////


const EmojiDetails = (props) => {
  const [emojiDetails, setEmojiDetails ] = useState(null)

  useEffect(() => {

    const getDetails = async () => {
        const response = await axios.get('https://emojihub.herokuapp.com/api/all/${props.selectedEmoji}')
        console.log(response)
        setEmojiDetails(response.data)
        // setEmoji(response.data.emoji)
      }

      getDetails()
    }, [props.selectedEmoji] 


  return (
    <div>
      {emojiDetails ? (
        <div className="emojidetails">
          <img src={'${emojiDetails.image}'} />
          <h3>{emogiName.emoji}</h3>
          
          <div>
            Emoji.propTypes = {
              size: PropTypes.string,
              lineHeight: PropTypes.string,
            }


</div>
                    <button onClick={props.goBack}>Go Back</button>
                </div>
                

        </div>

      )}

  )
  }
    </div>
  )

  export default EmojiDetails


  // <p className="icon">{emoji.PropTypes.oneOf(allEmojiNames(emojis))}</p>
  // <p className="size">{size.PropTypes.string}</p>
  // <p className="height">{lineHeight.PropTypes.string}</p>

///////////////////////////////////
///////////////////////////////////

// const emoji = this.props.Emoji
// let emojiGroups = (new emoji(emoji.smileys_and_people)).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })


// const Emoji = ({ displayEmoji }) => {
//   const [emoji, setEmoji] = useState('')


  // }, [displayEmoji])

  // return (
  //   <h2 style={{fontStyle: 'italic'}}>{emoji !== '' && emoji}</h2>
  // )



