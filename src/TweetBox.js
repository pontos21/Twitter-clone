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
                {/* <input placeholder='Enter image URL' type='text' /> */}
            </div>
            <Button>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox