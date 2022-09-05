import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
            <Avatar src="./src/future goal.jpg" />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Paul <span className='post__headerSpecial'>
                          <VerifiedUserIcon className='post__badge' />
                          @pontos  
                        </span>
                        
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>Build Twitter clone</p>
                </div>
            </div>
            <img src="">
            </img>
            <div className='post__footer'>
                <ChatBubbleIcon fontSize='small' />
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post