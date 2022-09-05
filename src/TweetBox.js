import React from 'react'
import './TweetBox.css'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src="./src/future goal.jpg" />
                <input placeholder='Whats happening' type='text' />
            </div>
            <input className='tweetBox__imageInput' placeholder='Optional: Enter image URL' type='text' />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox