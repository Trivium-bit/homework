import React from 'react'
import AlternativeMessage from './AlternativeMessage';
import Message from './Message'
import classes from './Message.module.css'

export type DataMessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData = {
    avatar: 'https://yt3.ggpht.com/ytc/AAUvwniE5UUHl7xgQsdCV_JUx4Ky44x12w2XJQWt0q0SUw=s900-c-k-c0x00ffffff-no-rj',
    name: 'Vitali',
    message: 'Hello world!',
    time: '22:00',
}

function HW1() {
    return (
       
        <div className={classes.background}>
            <hr/>
            homeworks 1
            <hr/>
            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time} />
             <hr/>
            {<AlternativeMessage/>}
            <hr/>
        </div>
    )
}

export default HW1
