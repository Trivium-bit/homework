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
    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgbin.com%2Fpng%2FPmqdqS0W%2Fdota-2-steam-computer-icons-video-game-developer-png&psig=AOvVaw2rGsozgDS2BuGhyXAa82Hv&ust=1634990504704000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiJgbX83fMCFQAAAAAdAAAAABAJ',
    name: 'Vitali',
    message: 'Hello world!',
    time: '22:00',
}

function HW1() {
    return (

        <div className={classes.background}>
            <hr />
            homeworks 1
            <hr />
            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time} />
            <hr />
            {<AlternativeMessage />}
            <hr />
        </div>
    )
}

export default HW1
