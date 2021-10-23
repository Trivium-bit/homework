import React from 'react'
import classes from './Message.module.css'
import { DataMessageType } from './HW1'

function Message(props: DataMessageType) {
    return (
        <div className={classes.message}>
            <img className={classes.img} src={props.avatar} />
            <div className={classes.triangle}></div>
            <div className={classes.boxMessage}>
                <div className={classes.name}>
                    {props.name}
                </div>

                {props.message}
                <br />
                <div className={classes.time}>
                    {props.time}
                </div>

            </div>
        </div>
    )
}

export default Message
