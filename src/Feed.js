import React from 'react'
import './Feed.css'
import Tweetbox from './TweetBox'
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
        <div className='feed__header'>
          <h2>Home</h2>  
        </div>


        <Tweetbox />
        <Post />
        
    </div>
  )
}

export default Feed