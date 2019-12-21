import React from 'react'

import Joke from './Joke'

function JokeDemo(){
    
    return (
        <div>
            <Joke que='What is your name?' ans='prasad' />
            <Joke que='how r u?' ans='fine' />
            <Joke que='edu?' ans='graduation' />
            <Joke que='when' ans='2015' />
            <Joke que='fro, where' ans='Mumbai'/>
        </div>
    )
}

export default JokeDemo
