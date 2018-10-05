import React from 'react'

export default function House(props){
    return(
        <div>
        <h1>House</h1>

        <h4 className='comments2'>{props.comment.text}</h4>
    <button className='updateDelete' onClick= {props.handleDelete}>Delete</button>

        </div>
    )
}