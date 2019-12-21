import React from 'react'

function Joke(props){
    return (
        <div>
            <h3>Question: {props.que}</h3>
            <p>Answer: {props.ans}</p>
        </div>
    )
}

export default Joke
